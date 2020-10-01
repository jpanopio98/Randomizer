let pokemon = [{
  name: "Pikachu",
  type: "Electric"
}, {
  name: "Charizard",
  type: "Fire"
}, {
  name: "Blastoise",
  type: "Water"
} ,{
  name: "Venusaur",
  type: "Grass"
}];

let randomIndex;
let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
	textSize(32);
	text("click to randomize",50,50);
	setTimeout(changeBackground, 1000);
}

function changeBackground(){
	if (counter <= 5) {
		counter++;
		console.log(counter)
		background(random(255),random(255),random(255));
		setTimeout(changeBackground, 1000);



	}else {
		
	}


}

function mousePressed(){
	background(random(200,255));
		if (pokemon[0]) {


			randomIndex = int(random(pokemon.length));
			text(pokemon[randomIndex].name,50,50 );
			pokemon.splice(randomIndex, 1);

	}else {
		background(200,255);
		text("A WILD POKEMON RAN AWAY",50, 50);
	}
}
function draw() {

}
