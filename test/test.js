const assert = require('assert');
const shark = require('../src/index')
import getCookie from '../src/common/getCookie';

// ;可能会有问题
describe('getCookie API:', () => {
  it(`if document.cookie === 'a=111; b=222' input a output should 111`, () => {

    // setup mock document api
    Object.defineProperty(document, 'cookie', {
      get: jest.fn().mockImplementation(() => { return 'a=111; b=222'; }),
      set: jest.fn().mockImplementation(() => {}),
    })

    assert.equal(getCookie('a'), '111');
  })
  it(`if document.cookie === 'a=111; b=222' input c output should ''`, () => {
    // setup
    window.document.cookie = 'a=111; b=222'
    console.log('window.document.cookie is', window.document.cookie);
    
    assert.equal(getCookie('c'), '');
  })
})

describe('Array API:', () => {
  it(`shark.arrayEqual([0,2,3],[1,2,3]) should return false`,() => {
    assert.equal(shark.arrayEqual([0, 2, 3], [1, 2, 3]), false);
  })
  it(`shark.arrayEqual([1,2,3],[1,2,3]) should return true`, () => {
    assert.equal(shark.arrayEqual([1, 2, 3], [1, 2, 3]), true);
  })
})


