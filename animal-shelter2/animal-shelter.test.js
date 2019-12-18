const AnimalShelter = require('./animal-shelter');

describe('Animal Shelter', () => {
  it('adds a dog to the dog line', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue({ name: 'Rosey', type: 'dog' });
    expect(animalShelter.dogQueue.toString()).toEqual('Rosey , ');
  });
});
