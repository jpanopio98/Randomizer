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



function setup() {
  createCanvas(600, 600);
  background(200);
	textSize(32);
	text("click to randomize",50,50);







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
