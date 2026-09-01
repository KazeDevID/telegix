/**
 * Telegix - Pure JS Scenes & Wizard Dialog Engine
 * @module telegix/scenes
 */

import { Composer, compose } from './composer.js';

export class BaseScene extends Composer {
  /**
   * @param {string} id - Unique Scene identifier
   */
  constructor(id) {
    super();
    if (!id || typeof id !== 'string') {
      throw new Error('BaseScene requires a valid string ID');
    }
    this.id = id;
    this.enterHandlers = [];
    this.leaveHandlers = [];
  }

  /**
   * Handler executed when user enters the scene
   * @param {...Function} handlers
   */
  enter(...handlers) {
    this.enterHandlers.push(...handlers);
    return this;
  }

  /**
   * Handler executed when user leaves the scene
   * @param {...Function} handlers
   */
  leave(...handlers) {
    this.leaveHandlers.push(...handlers);
    return this;
  }
}

export class WizardScene extends BaseScene {
  /**
   * @param {string} id - Wizard Scene ID
   * @param {...Function} steps - Middleware step functions
   */
  constructor(id, ...steps) {
    super(id);
    this.steps = steps;

    this.use(async (ctx, next) => {
      if (!ctx.scene?.session) return next();
      const cursor = ctx.scene.session.cursor || 0;
      const step = this.steps[cursor];
      if (!step) {
        return ctx.scene.leave();
      }
      return step(ctx, next);
    });

    this.enter((ctx, next) => {
      ctx.scene.session.cursor = 0;
      const step = this.steps[0];
      if (step) {
        return step(ctx, next);
      }
      return next();
    });
  }
}

export class Stage extends Composer {
  /**
   * @param {Array<BaseScene>} scenes
   * @param {object} [options]
   */
  constructor(scenes = [], options = {}) {
    super();
    this.scenes = new Map();
    this.options = {
      defaultScene: null,
      ...options,
    };

    for (const scene of scenes) {
      this.register(scene);
    }

    this.use(this.middleware());
  }

  /**
   * Register a scene
   * @param {BaseScene} scene
   */
  register(scene) {
    if (!scene || !scene.id) {
      throw new Error('Stage.register requires a valid BaseScene instance with an ID');
    }
    this.scenes.set(scene.id, scene);
    return this;
  }

  /**
   * Returns Stage middleware
   */
  middleware() {
    const stageInstance = this;
    return async (ctx, next) => {
      if (!ctx.session) {
        throw new Error('Telegix Stage: session middleware is required before Stage middleware!');
      }

      ctx.session.__scenes = ctx.session.__scenes || {};
      const sceneSession = ctx.session.__scenes;

      // Setup scene control helper on ctx
      const sceneControl = {
        get session() {
          const currentId = sceneSession.current;
          if (!currentId) return {};
          sceneSession.state = sceneSession.state || {};
          return sceneSession.state;
        },
        get current() {
          const currentId = sceneSession.current;
          return currentId ? stageInstance.scenes.get(currentId) || null : null;
        },
        get state() {
          return sceneSession.state || {};
        },
        enter: async (sceneId, initialState = {}) => {
          const scene = stageInstance.scenes.get(sceneId);
          if (!scene) {
            throw new Error(`Telegix Stage: Scene '${sceneId}' not found!`);
          }
          sceneSession.current = sceneId;
          sceneSession.state = { ...initialState };
          sceneSession.cursor = 0;

          if (scene.enterHandlers.length > 0) {
            const enterFn = compose(scene.enterHandlers);
            await enterFn(ctx, async () => {});
          }
        },
        reenter: async () => {
          const currentId = sceneSession.current;
          if (currentId) {
            await sceneControl.enter(currentId, sceneSession.state);
          }
        },
        leave: async () => {
          const currentId = sceneSession.current;
          if (currentId) {
            const scene = stageInstance.scenes.get(currentId);
            if (scene && scene.leaveHandlers.length > 0) {
              const leaveFn = compose(scene.leaveHandlers);
              await leaveFn(ctx, async () => {});
            }
          }
          delete sceneSession.current;
          delete sceneSession.state;
          delete sceneSession.cursor;
        },
      };

      // Setup wizard helper on ctx
      const wizardControl = {
        get cursor() {
          return sceneSession.cursor || 0;
        },
        set cursor(val) {
          sceneSession.cursor = val;
        },
        get state() {
          return sceneControl.state;
        },
        selectStep: (index) => {
          sceneSession.cursor = index;
        },
        next: () => {
          sceneSession.cursor = (sceneSession.cursor || 0) + 1;
        },
        back: () => {
          sceneSession.cursor = Math.max(0, (sceneSession.cursor || 0) - 1);
        },
      };

      ctx.scene = sceneControl;
      ctx.wizard = wizardControl;

      const currentSceneId = sceneSession.current || this.options.defaultScene;
      if (!currentSceneId) {
        return next();
      }

      const scene = this.scenes.get(currentSceneId);
      if (!scene) {
        return next();
      }

      return scene.middleware()(ctx, next);
    };
  }
}

export const Scene = BaseScene;
