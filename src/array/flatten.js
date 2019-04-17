
// 数组扁平化
function flatten(arr) {
  arr.reduce((accumulator, cur) => accumulator.concat(cur), [])
}
