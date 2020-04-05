import { BaseClass } from './BaseClass';

class LoopTask extends BaseClass {
  constructor(modal = {}) {
    super();
    if (Object.keys(modal).length > 0) {
      Object.assign(this, modal);
    }
    return this;
  }

  next() {}
}
