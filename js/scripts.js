// Business Logic

// Problem: Design a method for moving a player object through a 2D space, serving text to page based on: player location, player health and hazard checking.

// Adventurer Constructor, defines the player variable.
function Adventurer(name, xCord, yCord, health, items, str, dex, wit) {
  this.name = name;
  this.xCord = xCord;
  this.yCord = yCord;
  this.health = health;
  this.items = [];
  this.str = str; // if time
  this.dex = dex; // if time
  this.wit = wit; // if time
}

Adventurer.prototype.north = function() {
  this.yCord += 1;
};

Adventurer.prototype.south = function() {
  this.yCord -= 1;
};

Adventurer.prototype.east = function() {
  this.xCord += 1;
};

Adventurer.prototype.west = function() {
  this.xCord -= 1;
};

// Attribute Generator to Define Initial Player Attributes.
var attributeGen = function() {
  return 1 + Math.floor(Math.random() * 4);
}




// User Interface Logic

// Initial player state. inputtedName will require jQuery, if testing in console pass a string.
var items = [];
var player = new Adventurer("inputtedName", 0, 0, 10, items, attributeGen(), attributeGen(), attributeGen());
