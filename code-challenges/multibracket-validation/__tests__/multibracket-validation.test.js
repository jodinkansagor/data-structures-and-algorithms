const { bracketValidation } = require('../multibracket-validation');

describe('bracket validator', () => {
  it('validates matching brackets', () => {
    expect(bracketValidation('()')).toBeTruthy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation('{{()}}')).toBeTruthy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation('(){}')).toBeTruthy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation('{()}{}')).toBeTruthy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation('()[[Extra Characters]]')).toBeTruthy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation('{[}]')).toBeFalsy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation('{')).toBeFalsy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation(')')).toBeFalsy;
  });
  it('validates matching brackets', () => {
    expect(bracketValidation('[}')).toBeFalsy;
  });
});
