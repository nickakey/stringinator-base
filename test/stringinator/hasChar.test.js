const stringinator = require('../../stringinator');

describe('hasChar()', () => {
  it('returns true for an existing char', () => {
    expect(stringinator.hasChar('purple', 'p')).toBe(true);
  });

  it('returns false for non-existing char', () => {
    expect(stringinator.hasChar('purple', 'z')).toBe(false);
  });

  it('returns false for non-existing char', () => {
    expect(stringinator.hasChar('purple', 'e')).toBe(true);
  });
});
