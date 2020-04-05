import { BaseClass } from './BaseClass';

/**
 *发布-订阅
 */
export class PubSub extends BaseClass {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  /**
   * 获取订阅消息所有的信息
   * @param message
   * @returns {Function}
   */
  static getDrivers(message) {
    try {
      const eventLoop = [];
      const events = this.messages[message];
      if (Object.keys(events).length === 0) {
        // eslint-disable-next-line func-names
        return function() {};
      }
      // eslint-disable-next-line no-restricted-syntax
      for (const key in events) {
        // eslint-disable-next-line no-prototype-builtins
        if (events.hasOwnProperty(key)) {
          eventLoop.push(events[key]);
        }
      }
      // eslint-disable-next-line func-names
      return function() {
        // eslint-disable-next-line no-restricted-syntax
        for (const values of eventLoop) {
          values();
        }
      };
    } catch (e) {
      throw new Error(`无法正常获取到${message}的订阅`);
    }
  }

  /**
   * 发布一个消息
   * @param message
   * @param async
   */
  static publish(message, async) {
    const news = typeof message === 'symbol' ? message.toString() : message;
    if (Reflect.has(this.messages, news)) {
      const driver = this.getDrivers(news);
      if (async) {
        setTimeout(driver);
      } else {
        driver();
      }
    } else {
      throw new Error(`该${news}信息没有被订阅`);
    }
  }

  /**
   * 发布一个消息，异步
   * @param message
   */
  static publishAsync(message) {
    return this.publish(message, true);
  }

  /**
   * 订阅一个消息
   * @param message
   * @param fn
   * @returns {string}
   */
  static subscribe(message, fn) {
    const news = typeof message === 'symbol' ? message.toString() : message;
    if (arguments.length < 2) {
      throw new Error('arguments error');
    }
    // eslint-disable-next-line no-plusplus
    ++this.uuid;
    const uuid = `uuid_${this.uuid}`;
    if (Reflect.has(this.messages, news)) {
      this.messages[news][uuid] = fn;
    } else {
      this.messages[news] = {
        [uuid]: fn
      };
    }
    return uuid;
  }

  /**
   * 销毁一个消息
   * @param message
   */
  static destroy(message) {
    const news = typeof message === 'symbol' ? message.toString() : message;
    if (Object.prototype.hasOwnProperty.call(this.messages, news)) {
      delete this.messages[news];
    }
  }

  /**
   * 销毁消息中一个目标内容
   * @param message
   * @param target
   */
  static destroyTarget(message, target) {
    const news = typeof message === 'symbol' ? message.toString() : message;
    if (Object.prototype.hasOwnProperty.call(this.messages, news)) {
      const targetMessage = this.messages[news];
      if (Object.prototype.hasOwnProperty.call(targetMessage, target)) {
        delete targetMessage[target];
      }
    }
  }

  /**
   * 发布一个消息
   * @param message
   * @param async
   */
  static emit(message, async) {
    return this.publish(message, async);
  }

  /**
   * 发布一个消息，异步
   * @param message
   * @returns {*}
   */
  static emitAsync(message) {
    return this.publishAsync(message, true);
  }

  /**
   * 订阅一个消息
   * @param message
   * @param fn
   * @returns {string}
   */
  static on(message, fn) {
    return this.subscribe(message, fn);
  }

  /**
   * 销毁一个消息
   * @param message
   */
  static end(message) {
    return this.destroy(message);
  }

  /**
   * 销毁目标消息一个队列
   * @param message
   * @param target
   */
  static endTarget(message, target) {
    return this.destroyTarget(message, target);
  }

  static nextStep(fn) {
    fn();
  }
}

PubSub.messages = {};
PubSub.uuid = -1;

export default {
  PubSub
};
