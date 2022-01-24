var doodle; 
var b; 
var barr = []
var g; 
function preload(){
  jackImg = loadImage("jack.JPG")
}
function setup(){
createCanvas(500,700); 
doodle = new Doodle();
 g = height/10
for(i = 1; i<10; i++){
  b = new Block (Math.round(random(50,width - 50)),height-i*g)
  barr.push(b)
}
rectMode(CENTER); 
}

function draw(){
  background("white")
  doodle.draw();
  doodle.update();
  for(var i of barr){
    i.draw();
  }
  drawSprites(); 
}

