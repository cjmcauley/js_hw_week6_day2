const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur_1
  let dinosaur_2
  let dinosaur_3
  let park

  beforeEach(function () {
    dinosaur_1 = new Dinosaur('mastodon', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('triceratops', 'carnivore', 150);
    dinosaur_3 = new Dinosaur('troodon', 'carnivore', 250);
    park = new Park('Jurassic Park', 10, ['dinosaur_1', 'dinosaur_2', 'dinosaur_3']);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur_1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur_1]);
  });
  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.removeDinosaurByName(dinosaur_1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur_2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    const actual = park.showDinosaurWithMostVisitors();
    assert.deepStrictEqual(actual, [dinosaur_3]);
  });


  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    const actual = park.showDinosaurOfSpecificSpecies('mastodon');
    assert.deepStrictEqual(actual, dinosaur_1 );
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    });

});
