
export class BaseClass {
  static newInstance() {
    if (!this.BeanContent) {
      this.BeanContent = new this();
    }
    return BaseClass();
  }
}

BaseClass.BeanContent = {};
export default {
  BaseClass
};
