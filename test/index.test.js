const lib = require('../src');

describe('module', () => {
  test('should expose a greet method', () => {
    expect(lib).toHaveProperty('greet');
  });

  test('should greet', () => {
    expect(lib.greet('bob')).toEqual('Hello bob.');
  });
});
