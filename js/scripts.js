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
  "As you step from the water into the forest, you realize you no longer see the water. You don’t see much of anything really, just trees. To the west, trees. To the east, trees. To the north, tress. To the south, wait is that? Nope, just more trees… You have a sincerely bad feeling about this. That voice in your head tells you to turn back. Do you?",
  "15",
  "16",
  "17",
  "Trees. Trees, everywhere! You conclude that you are in a forest. Good for you. The sun is blocked by the trees making everything look dark and gloomy. You can’t see much of anything through the dense forest in front of you. You start to wonder if you should go on. You’re smart, you figured out that you were in a forest. What do you do? All signs point to, No.",
  "19", //Space 19 is a trap that will place them somewhere else and will never be seen
  "20",
  "21",
  "You step from the rocky terrain onto the soft forest floor. You jump twice just to feel the ground flex underneath your feet. Seriously, it’s so soft you could sleep on it. You hear birds and other relaxing sounds all around you. You start to think you could stay here forever with Pooh and his friends. That’s not good. You have to move on. Do you really go farther into a forest that is clearly spellbinding you?",
  "23", //Space 23 is a trap that will place them somewhere else and will never be seen
  "You step out of the woods into an oasis! You must be one of the luckiest people ever. Do you realize how slim your chances were of finding this place? You see beautiful flowers everywhere. Are those, are those faeries?! No stupid, they are fireflies. Get your head back in the game. You see a little pond and drink from it. You feel your health and energy improve. That’s good, because finding your way out of here isn’t going to be easy."
];


Adventurer.prototype.spaceCheck = function() {
  if (this.yCord === 0 && this.xCord === 0) {
    $("#description").html(descriptions[0]);
    // this.items.push("The Earth Stone");
  } else if (this.yCord === 1 && this.xCord === 0) {
    $("#description").html(descriptions[1]);
  } else if (this.yCord === 2 && this.xCord === 0) {
    $("#description").html(descriptions[2]);
  } else if (this.yCord === 3 && this.xCord === 0) {
    $("#description").html(descriptions[3]);
  } else if (this.yCord === 4 && this.xCord === 0) {
    $("#description").html(descriptions[4]);
    // this.items.push("The Water Stone");
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
    // Starting
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
  } else if (this.yCord === 0 && this.xCord === 4) {
    $("#description").html(descriptions[20]);
    // this.items.push("The Sun Stone");
  } else if (this.yCord === 1 && this.xCord === 4) {
    $("#description").html(descriptions[21]);
  } else if (this.yCord === 2 && this.xCord === 4) {
    $("#description").html(descriptions[22]);
  } else if (this.yCord === 3 && this.xCord === 4) {
    $("#description").html(descriptions[23]);
  } else if (this.yCord === 4 && this.xCord === 4) {
    $("#description").html(descriptions[24]);
    // forestLoop();
  } else {
    $("#description").html("You're incredibly lost!");
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
    player.death();
    $("#health").html(player.health);
  });

  $("#east").click(function() {
    player.east();
    player.spaceCheck();
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
