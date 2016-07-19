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
  if (this.yCord > 4) {
    this.health -= 1;
    console.log(this);
  } else {
    this.yCord += 1;
    console.log(this);
  }
};

Adventurer.prototype.south = function() {
  if (this.yCord < 0) {
    this.health -= 1;
    console.log(this);
  } else {
    this.yCord -= 1;
    console.log(this);
  }
};

Adventurer.prototype.east = function() {
  if (this.xCord > 4) {
    this.health -= 1;
    console.log(this);
  } else {
    this.xCord += 1;
    console.log(this);
  }
};

Adventurer.prototype.west = function() {
  if (this.xCord < 0) {
    this.health -= 1;
    console.log(this);
  } else {
    this.xCord -= 1;
    console.log(this);
  }
};

Adventurer.prototype.death = function() {
  if (this.health < 1) {
    alert("You Have Died of Dysentery")
  }
}


// Attribute Generator to Define Initial Player Attributes.
var attributeGen = function() {
  return 1 + Math.floor(Math.random() * 4);
}

// Description Start
// xCord is an Adjective and yCord is a Verb
// var desc = [ {
//
// }
// ]


// User Interface Logic


$(document).ready(function() {
  var items = [];
  var player = new Adventurer("inputtedName", 0, 0, 10, items, attributeGen(), attributeGen(), attributeGen());

  // Initial player state. inputtedName will require jQuery, if testing in console pass a string.

  $("#north").click(function() {
    player.north();
    player.death();
  });

  $("#east").click(function() {
    player.east();
    player.death();
  });

  $("#south").click(function() {
    player.south();
    player.death();
  });

  $("#west").click(function() {
    player.west();
    player.death();
  });


}); // End Document.Ready
