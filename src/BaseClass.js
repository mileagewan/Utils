export class BaseClass {
  static newInstance() {
    if (!this.BeanContent) {
      this.BeanContent = new this();
    }
    return BaseClass();
  }

  static newInstanceById(id) {
    if (!this.BeanContentById[id]) {
      this.BeanContentById[id] = new this(id);
    }
    return this.BeanContentById[id];
  }
}

BaseClass.BeanContent = null;
BaseClass.BeanContentById = {};
export default {
  BaseClass,
};
