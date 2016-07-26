// Business Logic

// Problem: Design a method for moving a player object through a 2D space, serving text to page based on: player location, player health and hazard checking.

// Adventurer Constructor, defines the player variable.
function Adventurer(name, xCord, yCord, health, moves, items, str, dex, wit) {
  this.name = name;
  this.xCord = xCord;
  this.yCord = yCord;
  this.health = health;
  this.moves = moves;
  this.items = [];
  this.str = str; // if time
  this.dex = dex; // if time
  this.wit = wit; // if time
}

Adventurer.prototype.north = function() {
  if (this.yCord > 4) {
    this.health -= 1;
    this.moves += 1;
    console.log(this);
  } else {
    this.yCord += 1;
    this.moves += 1;
    console.log(this);
  }
};

Adventurer.prototype.south = function() {
  if (this.yCord < 0) {
    this.health -= 1;
    this.moves += 1;
    console.log(this);
  } else {
    this.yCord -= 1;
    this.moves += 1;
    console.log(this);
  }
};

Adventurer.prototype.east = function() {
  if (this.xCord > 4) {
    this.health -= 1;
    this.moves += 1;
    console.log(this);
  } else {
    this.xCord += 1;
    this.moves += 1;
    console.log(this);
  }
};

Adventurer.prototype.west = function() {
  if (this.xCord < 0) {
    this.health -= 1;
    this.moves += 1;
    console.log(this);
  } else {
    this.xCord -= 1;
    this.moves += 1;
    console.log(this);
  }
};

Adventurer.prototype.death = function() {
  if (this.health < 1 || this.moves > 50) {
    alert("You Have Died of Dysentery")
  }
}

// Traps
Adventurer.prototype.forestTrap = function() {
  if (this.yCord === 4 && this.xCord === 3 || this.yCord === 3 && this.xCord === 4) {
      var trapRoll = Math.floor(Math.random() * 7) + 1;

      if (trapRoll === 7 && this.yCord === 4 && this.xCord === 3) {
      $("#east").trigger("click");
    } else if (trapRoll === 7 && this.yCord === 3 && this.xCord === 4) {
      $("#north").trigger("click");
    } else if (trapRoll <= 3) {
      this.moves += 1;
      this.health -= 1;
      $("#west").trigger("click");
      $("#notices").html("<strong>You have been wondering around for 1 day. You feel more tired and your health has waned.</strong>");
    } else if (trapRoll > 3) {
      this.moves += 2;
      this.health -= 2;
      $("#south").trigger("click");
      $("#notices").html("<strong>You have been wondering around for 2 days. You feel more tired and your health has waned.</strong>");
    }
  }
}

// Attribute Generator to Define Initial Player Attributes.
var attributeGen = function() {
  return 1 + Math.floor(Math.random() * 4);
}

var descriptions = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24"
];


Adventurer.prototype.spaceCheck = function() {
  if (this.yCord === 0 && this.xCord === 0) {
    $("#description").html(descriptions[0]);
  } else if (this.yCord === 1 && this.xCord === 0) {
    $("#description").html(descriptions[1]);
  } else if (this.yCord === 2 && this.xCord === 0) {
    $("#description").html(descriptions[2]);
  } else if (this.yCord === 3 && this.xCord === 0) {
    $("#description").html(descriptions[3]);
  } else if (this.yCord === 4 && this.xCord === 0) {
    $("#description").html(descriptions[4]);
  } else if (this.yCord === 0 && this.xCord === 1) {
    $("#description").html(descriptions[5]);
  } else if (this.yCord === 1 && this.xCord === 1) {
    $("#description").html(descriptions[6]);
  } else if (this.yCord === 2 && this.xCord === 1) {
    $("#description").html(descriptions[7]);
  } else if (this.yCord === 3 && this.xCord === 1) {
    $("#description").html(descriptions[8]);
  } else if (this.yCord === 4 && this.xCord === 1) {
    $("#description").html(descriptions[9]);
  } else if (this.yCord === 0 && this.xCord === 2) {
    $("#description").html(descriptions[10]);
  } else if (this.yCord === 1 && this.xCord === 2) {
    $("#description").html(descriptions[11]);
  } else if (this.yCord === 2 && this.xCord === 2) {
    $("#description").html(descriptions[12]);
    this.winCheck();
  } else if (this.yCord === 3 && this.xCord === 2) {
    $("#description").html(descriptions[13]);
  } else if (this.yCord === 4 && this.xCord === 2) {
    $("#description").html(descriptions[14]);
  } else if (this.yCord === 0 && this.xCord === 3) {
    $("#description").html(descriptions[15]);
  } else if (this.yCord === 1 && this.xCord === 3) {
    $("#description").html(descriptions[16]);
  } else if (this.yCord === 2 && this.xCord === 3) {
    $("#description").html(descriptions[17]);
  } else if (this.yCord === 3 && this.xCord === 3) {
    $("#description").html(descriptions[18]);
  } else if (this.yCord === 4 && this.xCord === 3) {
    $("#description").html(descriptions[19]);
    // Forest Trap
  } else if (this.yCord === 0 && this.xCord === 4) {
    $("#description").html(descriptions[20]);
  } else if (this.yCord === 1 && this.xCord === 4) {
    $("#description").html(descriptions[21]);
  } else if (this.yCord === 2 && this.xCord === 4) {
    $("#description").html(descriptions[22]);
  } else if (this.yCord === 3 && this.xCord === 4) {
    $("#description").html(descriptions[23]);
    // Forest Trap
  } else if (this.yCord === 4 && this.xCord === 4) {
    $("#description").html(descriptions[24]);
  } else {
    $("#description").html("You're incredibly lost!");
  }
}

// Winning!
Adventurer.prototype.winCheck = function() {
  if (this.yCord === 2 && this.xCord === 2 && this.items.indexOf("The Water Stone", "The Earth Stone", "The Sun Stone") !== -1) {
    $("#description").html("You've won!");
  }
}

// User Interface Logic


$(document).ready(function() {
  var items = [];
  var player = new Adventurer("inputtedName", 0, 0, 10, 0, items, attributeGen(), attributeGen(), attributeGen());

  // Initial player state. inputtedName will require jQuery, if testing in console pass a string.

  $("#north").click(function() {
    player.north();
    player.spaceCheck();
    player.forestTrap();
    player.death();
    $("#health").html(player.health);
  });

  $("#east").click(function() {
    player.east();
    player.spaceCheck();
    player.forestTrap();
    player.death();
    $("#health").html(player.health);
  });

  $("#south").click(function() {
    player.south();
    player.spaceCheck();
    player.death();
    $("#health").html(player.health);
  });

  $("#west").click(function() {
    player.west();
    player.spaceCheck();
    player.death();
    $("#health").html(player.health);
  });


}); // End Document.Ready
