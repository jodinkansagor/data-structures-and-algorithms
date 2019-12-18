const AnimalShelter = require('./animal-shelter');

describe('Animal Shelter', () => {
  it('adds a dog to the dog line', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue({ name: 'Rosey', type: 'dog' });
    expect(animalShelter.dogQueue.toString()).toEqual('Rosey , ');
  });

  it('adopts a dog from the dog line', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue({ name: 'Rosey', type: 'dog' });
    animalShelter.enqueue({ name: 'Gucci', type: 'dog' });
    animalShelter.enqueue({ name: 'Willow', type: 'cat' });
    animalShelter.animalDequeue('dog');
    expect(animalShelter.dogQueue.toString()).toEqual('Gucci , ');
  });
});
