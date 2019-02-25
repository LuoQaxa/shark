
// 如果采取这样的方式引入，那每写一个函数，就会引入一次
// const arrayEqual = require('./array/arrayEqual');
import { arrayEqual } from './array/arrayEqual';

export {
  arrayEqual
}
// module.exports = {
//   arrayEqual
// }