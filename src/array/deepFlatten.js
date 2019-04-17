function deepFlatten(arr) {
  return arr.reduce((accumulator, cur) => accumulator.concat(Array.isArray(cur) ? deepFlatten(cur) : cur),[])
}

console.log(deepFlatten([1, [2, 3]]));
