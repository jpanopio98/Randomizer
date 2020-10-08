let stand = [{
  name: "Star Platinum",

}, {
  name: "The World",

}, {
  name: "Killer Queen",

}, {
  name: "Hanged Man",

},{
  name:"Silver Chariot",

},{
  name:"Hermit Purple",

},{
  name:"The Fool",

},{
  name:"Emperor"
}];

let randomIndex;
let animating = false;
let stands = [];
let imageCount = 0;
let button;


function preload() {
  for (let i = 0; i <= 8; i++) {
    stand[i] = loadImage("images/stand_" + i + ".jpg");
  }
}

function setup() {
  createCanvas(1200, 600);
//  background(200);
  textSize(42);
  text("STAND RANDOMIZER", 50, 50);
  text("A stand is an entity based on tarot cards", 150, 150);

  setTimeout(changeBackground, 1000);
  imageMode(CENTER);
  frameRate(9);
  button =  createButton("click to randomize");
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();
    image(stand[imageCount], width/2,height/2);

    if (imageCount < stand.length - 1) {
      imageCount++;
      console.log(imageCount);
    } else {
      imageCount = 0;
    }
  }
}


function changeBackground() {
  if (counter <= 8) {
    counter++;
    console.log(counter)
    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  } else {

  }
}



function randomizer() {
  animating = false;

  if (stand[0]) {
    //background(random(200,255));
      //clear();

     randomIndex = int(random(stand.length));
     image(random[stands],50,50);


      stand.splice(randomIndex, 1);


  } else {
  //  background(200, 255);
    //text("MUDA MUDA MUDA MUDA MUDA", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
