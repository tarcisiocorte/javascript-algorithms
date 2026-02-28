const ladderLength = require('.');

describe('Word Ladder - ladderLength (single test with many assertions)', () => {
  test('examples and extra cases in one test', () => {
    expect(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log','cog'])).toBe(5);
    expect(ladderLength('hit', 'cog', ['hot','dot','dog','lot','log'])).toBe(0);
    expect(ladderLength('same', 'same', ['same'])).toBe(1);
    expect(ladderLength('a', 'b', ['b'])).toBe(2);
    expect(ladderLength('abc', 'de', ['dbc','dec'])).toBe(0);
    expect(ladderLength('hit', 'cog', ['hot','hot','dot','dog','lot','log','cog'])).toBe(5);
    expect(ladderLength('hit', 'cog', ['hot','hog','hog2','cog'])).toBe(4);
  });
});
