const {assert} = require('chai');

describe('User visits root', () => {
  describe('posting a quote', () => {
    it('saves quote and metadata submitted by user', () => {
      const quote = "People create their own questions because they are afraid to look straight. All you have to do is look straight and see the road, and when you see it, don't sit looking at it - walk.";
      const attributed = "Ayn Rand";
      const source = "Self";

      browser.url('/');
      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');

      assert.include('#quotes', quote);
      assert.include('#quotes', attributed);
      assert.include('#quotes', source);
    });
  });
});