// eslint-disable-next-line no-extend-native
Function.prototype.proxy = function proxy(a) {
  if (a) {
    const arr = [];
    for (let i = 1; i < arguments.length - 1; i += 1) {
      // eslint-disable-next-line prefer-rest-params
      arr.push(arguments[i]);
    }
    this.apply(a, arr);
  } else {
    // eslint-disable-next-line prefer-rest-params
    this.apply(this, arguments);
  }
};

// eslint-disable-next-line no-extend-native
Function.prototype.proxyBefore = function proxyBefore() {};
