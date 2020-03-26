var s;
var food;

function setup() {
  createCanvas(600,600);
  s=new Snake();
  pickLocation();;
}

function pickLocation(){
  var cols=floor(width/20);
  var rows=floor(height/20);
  food=createVector(floor(random(cols)),floor(random(rows)));
  food.mult(20);
}
  
function draw() {
  background(51); 
  s.update();
  s.show();

  if(s.eat(food)){
    pickLocation();
  }

  fill(255,0,100);
  rect(food.x, food.y, 20, 20);
 drawSprites();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    s.dir(0,-1);
  }else if(keyCode===DOWN_ARROW){
    s.dir(0,1);
  }else if(keyCode===RIGHT_ARROW){
    s.dir(1,0);
  }else if(keyCode===LEFT_ARROW){
    s.dir(-1,0);
  }
}

