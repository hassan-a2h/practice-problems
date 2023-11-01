const beeramid = require('./beeramid');

describe('should test the beeramid algo', () => {
  it('will test the output', () => {
    const result = beeramid(10, 2);
    expect(result).toEqual(2);
  });

  it('will test the output', () => {
    const result = beeramid(455, 5);
    expect(result).toEqual(6);
  });

  it('will test the output', () => {
    const result = beeramid(3, 4);
    expect(result).toEqual(0);
  });

  it('will test the output', () => {
    const result = beeramid(-1, 4);
    expect(result).toEqual(0);
  });
});