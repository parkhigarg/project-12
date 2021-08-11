var track_img;
var person_running;
var track;
var person;
function preload(){
  //pre-load images
  track_img = loadImage("path.png");
  person_running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(800, 800);
  //create sprites here
  track = createSprite(200, 200);
  track = addAnimation("track_img");
  person = createSprite(200, 200);
  person = addAnimation("person_running")
  
  }

function draw() {
  background(100);
drawSprites;
}
