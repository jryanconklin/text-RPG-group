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
    console.log(descriptions[0]);
    // this.items.push("The Earth Stone");
  } else if (this.yCord === 1 && this.xCord === 0) {
    console.log(descriptions[1]);
  } else if (this.yCord === 2 && this.xCord === 0) {
    console.log(descriptions[2]);
  } else if (this.yCord === 3 && this.xCord === 0) {
    console.log(descriptions[3]);
  } else if (this.yCord === 4 && this.xCord === 0) {
    console.log(descriptions[4]);
    // this.items.push("The Water Stone");
  } else if (this.yCord === 0 && this.xCord === 1) {
    console.log(descriptions[5]);
  } else if (this.yCord === 1 && this.xCord === 1) {
    console.log(descriptions[6]);
  } else if (this.yCord === 2 && this.xCord === 1) {
    console.log(descriptions[7]);
  } else if (this.yCord === 3 && this.xCord === 1) {
    console.log(descriptions[8]);
  } else if (this.yCord === 4 && this.xCord === 1) {
    console.log(descriptions[9]);
  } else if (this.yCord === 0 && this.xCord === 2) {
    console.log(descriptions[10]);
  } else if (this.yCord === 1 && this.xCord === 2) {
    console.log(descriptions[11]);
  } else if (this.yCord === 2 && this.xCord === 2) {
    console.log(descriptions[12]);
    // Starting
  } else if (this.yCord === 3 && this.xCord === 2) {
    console.log(descriptions[13]);
  } else if (this.yCord === 4 && this.xCord === 2) {
    console.log(descriptions[14]);
  } else if (this.yCord === 0 && this.xCord === 3) {
    console.log(descriptions[15]);
  } else if (this.yCord === 1 && this.xCord === 3) {
    console.log(descriptions[16]);
  } else if (this.yCord === 2 && this.xCord === 3) {
    console.log(descriptions[17]);
  } else if (this.yCord === 3 && this.xCord === 3) {
    console.log(descriptions[18]);
  } else if (this.yCord === 4 && this.xCord === 3) {
    console.log(descriptions[19]);
  } else if (this.yCord === 0 && this.xCord === 4) {
    console.log(descriptions[20]);
    // this.items.push("The Sun Stone");
  } else if (this.yCord === 1 && this.xCord === 4) {
    console.log(descriptions[21]);
  } else if (this.yCord === 2 && this.xCord === 4) {
    console.log(descriptions[22]);
  } else if (this.yCord === 3 && this.xCord === 4) {
    console.log(descriptions[23]);
  } else if (this.yCord === 4 && this.xCord === 4) {
    console.log(descriptions[24]);
    // forestLoop();
  } else {
    console.log("You're incredibly lost!")
  }
}


// User Interface Logic


$(document).ready(function() {
  var items = [];
  var player = new Adventurer("inputtedName", 0, 0, 10, items, attributeGen(), attributeGen(), attributeGen());

  // Initial player state. inputtedName will require jQuery, if testing in console pass a string.

  $("#north").click(function() {
    player.north();
    player.spaceCheck();
    player.death();
  });

  $("#east").click(function() {
    player.east();
    player.spaceCheck();
    player.death();
  });

  $("#south").click(function() {
    player.south();
    player.spaceCheck();
    player.death();
  });

  $("#west").click(function() {
    player.west();
    player.spaceCheck();
    player.death();
  });


}); // End Document.Ready
