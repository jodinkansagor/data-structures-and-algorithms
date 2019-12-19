const { bracketValidation } = require('../multibracket-validation');

describe('validator', () => {
  it('works', () => {
    expect(bracketValidation('{}')).toEqual(true);
    expect(bracketValidation('{}(){}')).toEqual(true);
    expect(bracketValidation('()[[Extra Characters]]')).toEqual(true);
    expect(bracketValidation('(){}[[]]')).toEqual(true);
    expect(bracketValidation('{}{Code}[Fellows](())')).toEqual(true);
    expect(bracketValidation('[({}]')).toEqual(false);
    expect(bracketValidation('(](')).toEqual(false);
    expect(bracketValidation('{(})')).toEqual(false);
    expect(bracketValidation('{')).toEqual(false);
    expect(bracketValidation(')')).toEqual(false);
    expect(bracketValidation('[}')).toEqual(false);
  });
});
