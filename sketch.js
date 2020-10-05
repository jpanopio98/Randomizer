let pokemon = [{
  name: "Pikachu",
  type: "Electric"
}, {
  name: "Charizard",
  type: "Fire"
}, {
  name: "Blastoise",
  type: "Water"
}, {
  name: "Venusaur",
  type: "Grass"
}];

let randomIndex;
let animating = false;
let pkmn = [];
let imageCount = 0;
let button;

function preload() {
  for (let i = 0; i <= 3; i++) {
    pkmn[i] = loadImage("images/pkmn_" + i + ".JPG");
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  text("ZA WARUDO", 50, 50);
  setTimeout(changeBackground, 1000);
  imageMode(CENTER);
  frameRate(9);
  button =  createButton("click to randomize");
  button.mousePressed(buttonPressed);
}

function changeBackground() {
  if (counter <= 5) {
    counter++;
    console.log(counter)
    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  } else {

  }
}

function randomizer() {
  animating = false;

  if (pokemon[0]) {
    background(random(200, 255));
    randomIndex = int(random(pokemon.length));
    text(pokemon[randomIndex].name, 50, 50);
    pokemon.splice(randomIndex, 1);

  } else {
    background(200, 255);
    text("MUDA MUDA MUDA MUDA MUDA", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}

function draw() {
  if (animating == true) {

    image(pkmn[imageCount], width / 2, height / 2);
    if (imageCount < pkmn.length - 1) {
      imageCount++;
    } else {
      imageCount = 0;
    }
  }
}
