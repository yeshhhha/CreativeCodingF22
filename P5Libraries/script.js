let cnv;
let drawing = [];
let currentPath = [];

function setup() {
  cnv= createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mousePressed(startPath);
  background(255);

  wordObject = createWord3D (
    "draw around", 4, width/200, 15, true, "Arial", BOLD   
  )

}

function startPath () {
  currentPath = [];
  drawing.push(currentPath);
}

function draw() {
  background(255);

  if (mouseIsPressed) {
    let point = {
      x: mouseX,
      y: mouseY,
    }
    currentPath.push(point);
  }

  stroke(random(255),random(255), random(255));
  strokeWeight(3);
  noFill();
  for (let i = 0; i < drawing.length; i++) {
    let path = drawing [i];
    beginShape();
    for (let s = 0; s < path.length; s++) {
      vertex(path[s].x, path[s].y)
    }
    endShape();
  }

  normalMaterial();
	wordObject.show(); 
  

}