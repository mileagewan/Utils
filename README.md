## 一个简单的发布-订阅者模式三方件，提供对应的消费者模式

### 前提

在开发中，我们经常在考虑为什么增加这种订阅模式，根本原因是因为我们在使用的时候有时对一些东西需要进行通讯的时候会碰到一些麻烦，如果是在组件开发中，经常碰到组件深层传值操作，当然 vue，react，angular 也提供了对应的解决方案，例如 vue 中的$on,$emit

### 使用方式

安装

```javascript
npm i p_to_s -S

import { P_TO_S } from 'P_TO_S'

// 订阅一个消息
P_TO_S.subscribe('test', function() {
  console.log(1)
})

// 发布一个消息
P_TO_S.publish('test')

// result

// ==>  1

```

### API

| 方法          | 说明               | 参数                            | 结果                  |
| ------------- | ------------------ | ------------------------------- | --------------------- |
| publish       | 发布一个消息       | message(string), async(boolean) | void                  |
| publishAsync  | 异步发布一个消息   | message(string)                 | void                  |
| subscribe     | 订阅一个消息       | message(string), fn(Function)   | uuid,该方法的唯一标识 |
| destroy       | 销毁一个订阅       | message                         | 删除一个订阅的消息    |
| destroyTarget | 销毁一个目标订阅   | message(string), target(string) | 删除一个订阅的消息    |
| on            | 等于 subscribe     | ---                             | ---                   |
| emit          | 等于 publish       | ---                             | ---                   |
| emitAsync     | 等于 publishAsync  | ---                             | ---                   |
| end           | 等于 destroy       | ---                             | ---                   |
| endTarget     | 等于 destroyTarget | ---                             | ---                   |

### GitHub

https://github.com/mileagewan/Utils
