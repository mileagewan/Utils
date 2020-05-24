import { BaseClass } from './BaseClass';

class Throttle extends BaseClass {
  constructor(id) {
    super();
    this.name = id;
    this.status = false;
    this.timer = null;
  }

  throttle(timeout) {
    this.status = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.status = false;
    }, timeout);
  }
}

const throttle = Throttle.newInstanceById('uuid_1');
console.log(throttle);
console.log(Throttle);
