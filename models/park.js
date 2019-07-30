const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurByName = function(dinosaur) {
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.showDinosaurWithMostVisitors = function() {
  return Math.max(this.dinosaurs.guestsAttractedPerDay);
};

module.exports = Park;
