const totalCakes = require('./baker');

describe('the total cakes that can be baked', () => {
  it('should return the total cakes using the material',() => {
    let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    let cakes = totalCakes(recipe, available);
    expect(cakes).toEqual(2);
  });

  it('should return the total cakes using the material',() => {
    let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    let available = {sugar: 500, flour: 2000, milk: 2000};
    let cakes = totalCakes(recipe, available);
    expect(cakes).toEqual(0);
  });
});