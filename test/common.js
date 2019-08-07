import { getCookie } from '../src/common/getCookie';

// ;可能会有问题
describe('getCookie API:', () => {
  it(`if document.cookie === 'a=111; b=222' input a output should 111`, () => {
    // setup
    const document = {
      cookie: 'a=111; b=222'
    }

    assert.equal(getCookie('a'), '222');
  })
})