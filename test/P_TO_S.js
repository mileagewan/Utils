import { PubSub as P_TO_S } from '../src/PubSub';

P_TO_S.subscribe('test', () => {
  console.log('aaaaaaaaaaaa');
});
P_TO_S.subscribe('test', () => {
  console.log('aaaaaabbba');
});

P_TO_S.subscribe('test', () => {
  console.log('aaaaaccc');
});
P_TO_S.subscribe('test22', () => {
  console.log('aaaaaccc');
});
P_TO_S.subscribe('test3', () => {
  console.log('aaaaaccc');
});
console.log(P_TO_S.messages);

P_TO_S.publish('test');
P_TO_S.endTarget('test', 'uuid_0');
P_TO_S.destroyTarget('test22', 'uuid_3');

console.log(P_TO_S.messages);
