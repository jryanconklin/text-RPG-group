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


//Player Death
Adventurer.prototype.death = function() {
  if (this.health < 1 || this.moves > 50) {
    alert("You Have Died of Dysentery")
  }
}

//Items
Adventurer.prototype.itemCheck = function() {
  if (this.yCord === 4 && this.xCord === 0 && this.items.indexOf("The Water Stone") === -1) {
    this.items.push("The Water Stone");
  } else if (this.yCord === 0 && this.xCord === 0 && this.items.indexOf("The Earth Stone") === -1) {
    this.items.push("The Earth Stone");
  } else if (this.yCord === 0 && this.xCord === 4 && this.items.indexOf("The Sun Stone") === -1) {
    this.items.push("The Sun Stone")
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
  "You're trecking through the forest and you see a poorly written, unintelligible sign on a rock that points south but also has a skull drawn. One would think that you wouldn't chance imminent death, but you're not exactly rich in choices, are you? To the north is the humid wetlands and to the east is a daunting mountain peak. To the west is a clearing of trees into a valley.",
  “The air grows thin as you descend from the mountains into the ash gray bog. The water is still as death all around.”,
  “These moist swamplands are thick with the scent of decay.”,
  “You find it as if it had called to you near the gray ghost of a dead tree. Buried deep in the muck and mud is a fist-sized blue gem with a serpentine iris. You have found the water stone.”,
  "5",
  "You have navigated atop the treacherous mountain peak. The air is light and you gasp for air from your tired lungs. Atop to mountain is a view that one could only believe with their own eyes; forests, mountains/hills, a vast desert and wetlands. A dark layer of fog obscures your view of beyond. As you lie down for the night it surprisingly begins to rain. It's surprising because your body feels frozen atop the mountain and it's not snow. Each direction immediately around you is mountains cascading down into either forests, wetlands, or deserts.",
  "As you step into the mountains you feel the humidity of the water surrounding you from half of your directions. As you look north the trees start turning into swamps before your view is obscured by fog. Looking west doesn't seem that different than the north. To the east is the ancient stone monolith that you know holds immense purpose. To the south you see the mountains peak, which would be quite a feat for someone such as yourself to navigate. ",
  “Wet heat drifts off the bog, soaking your clothing through. Your sweat doesn’t even have the chance to evaporate.”,
  “Huge swarms of mosquitos, gnats and worse drift haphazardly through the air around you. They bite and sting as your proceed through the wet marsh.”,
  "10",
  "The large hills are starting to turn to mountains. The land is dry and the smell of soot fills your nose. There was a fire here recently and you get the urge to move again. To the north is the ancient stone monolith that you originated from. To the east are large hills of sand appearing as if they were golden ocean waves. To the south you see a similar sight of sand and burnt trees. Westward is the mountain's peak. A daunting task for even the most seasoned travelers. ",
  "You are back where you started. The empty eyes of the beast stare at you hungrily",
  “You move amidst the spongy surface here, though before long you find yourself ankle deep in brackish swamp water.“,
  "As you step from the water into the forest, you realize you no longer see the water. You don’t see much of anything really, just trees. To the west, trees. To the east, trees. To the north, tress. To the south, wait is that? Nope, just more trees… You have a sincerely bad feeling about this. That voice in your head tells you to turn back. Do you?",
  "15",
  "16",
  "17",
  "Trees. Trees, everywhere! You conclude that you are in a forest. Good for you. The sun is blocked by the trees making everything look dark and gloomy. You can’t see much of anything through the dense forest in front of you. You start to wonder if you should go on. You’re smart, you figured out that you were in a forest. What do you do? All signs point to, No.",
  "Leaving the oasis seemed like great a way to get terribly lost. Then you notice the faeries, cough, fireflies have lit paths through the forest to the south and west for you!", //This space is trapped.
  "20",
  "21",
  "You step from the rocky terrain onto the soft forest floor. You jump twice just to feel the ground flex underneath your feet. Seriously, it’s so soft you could sleep on it. You hear birds and other relaxing sounds all around you. You start to think you could stay here forever with Pooh and his friends. That’s not good. You have to move on. Do you really go farther into a forest that is clearly spellbinding you?",
  "Leaving the oasis seemed like great a way to get terribly lost. Then you notice the faeries, cough, fireflies have lit paths through the forest to the south and west for you!", //This space is trapped.
  "You step out of the woods into an oasis! You must be one of the luckiest people ever. Do you realize how slim your chances were of finding this place? You see beautiful flowers everywhere. Are those, are those faeries?! No stupid, they are fireflies. Get your head back in the game. You see a little pond and drink from it. You feel your health and energy improve. That’s good, because finding your way out of here isn’t going to be easy."
];


Adventurer.prototype.spaceCheck = function() {
  if (this.yCord === 0 && this.xCord === 0) {
    $("#description").html(descriptions[0]);
    // The Earth Stone
    this.itemCheck();
  } else if (this.yCord === 1 && this.xCord === 0) {
    $("#description").html(descriptions[1]);
  } else if (this.yCord === 2 && this.xCord === 0) {
    $("#description").html(descriptions[2]);
  } else if (this.yCord === 3 && this.xCord === 0) {
    $("#description").html(descriptions[3]);
  } else if (this.yCord === 4 && this.xCord === 0) {
    $("#description").html(descriptions[4]);
    // The Water Stone Location
    this.itemCheck();
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
    // The Sun Stone
    this.itemCheck();
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
  var player = new Adventurer("Sierra Von Grey", 2, 2, 10, 0, items, attributeGen(), attributeGen(), attributeGen());

  // Initial player state. inputtedName will require jQuery, if testing in console pass a string.

  $("#north").click(function() {
    player.north();
    $("#notices").html("");
    player.spaceCheck();
    player.forestTrap();
    player.death();
    $("#health").html(player.health);
  });

  $("#east").click(function() {
    player.east();
    $("#notices").html("");
    player.spaceCheck();
    player.forestTrap();
    player.death();
    $("#health").html(player.health);
  });

  $("#south").click(function() {
    player.south();
    $("#notices").html("");
    player.spaceCheck();
    player.death();
    $("#health").html(player.health);
  });

  $("#west").click(function() {
    player.west();
    $("#notices").html("");
    player.spaceCheck();
    player.death();
    $("#health").html(player.health);
  });


}); // End Document.Ready
