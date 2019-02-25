const assert = require('assert');
const shark = require('../src/index')

describe('Array API:', () => {
  it(`shark.arrayEqual([0,2,3],[1,2,3]) should return false`,() => {
    assert.equal(shark.arrayEqual([0, 2, 3], [1, 2, 3]), false);
  })
  it(`shark.arrayEqual([1,2,3],[1,2,3]) should return true`, () => {
    assert.equal(shark.arrayEqual([1, 2, 3], [1, 2, 3]), true);
  })
})


