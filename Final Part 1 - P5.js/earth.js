//setting the initial states of the terrain
let terrain = [];
let multiplier = 100;
let xoff = 0;
let yoff = 0;
let zoff = 0;
let incline = 0.1;
let zincline = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // adding WEBGL to enable 3D elements
  angleMode(DEGREES); // setting the angle mode to degrees

  //mapping out the terrain to it's values
  for (let x = 0; x < 60; x++) {
    terrain.push([]);
    for (let y = 0; y < 60; y++) {
      terrain[x][y] = map(noise(x, y), 0, 1, -1, -multiplier, multiplier);
      xoff = xoff + incline;
    }
    yoff = yoff + incline;
  }
  
}

function draw() {
  background(0);

  stroke(0, 255, 0);
  noFill();
  zincline = (zincline + 1) % 500;
  // incline = sin(zincline) * 5; //to move up and down
  translate(-150, incline*10 , zincline); // adjusting the position of the terrain
  rotateX(85); // adding rotation to the background to the terrain looks like it is on flat ground
  translate(-width / 2, -height / 2);
  for (let y = 0; y < 60; y++) {
    beginShape(TRIANGLE_STRIP); // generating the terrain using the p5 TRIANGLE_STRIP element
    for (let x = 0; x < 60; x++) {
      //defining the x & y posisitons of each vector created
      vertex(x * 20, y * 20, terrain[x][y]);
      vertex(x * 20, (y + 1) * 20, terrain[x][y]);
    }
    endShape();
  }
}

//reference

// box_size = 25
// rez = 0.3
// amount = 600
// speed = 0.01
// factor = 0.008


// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
// }

// function draw() {
//   background(220);

//   noStroke();
//   ambientLight(100);
//   directionalLight(255, 0, 0, 0.25, 0.25, 0);
//   pointLight(0, 0, 255, -width/2 +100, -height/2 + 100, 250);
  
//   for (x=-width; x<=width; x+=box_size) {
//     for (y=-height; y<=height; y+=box_size) {
//       push()
//       rotateX(70)
//       translate(x,y,0)
//       depth = constrain(noise(x * factor + frameCount * speed, y * factor + frameCount * speed)*amount,0, 1000)
//       //console.log(depth)
//       box(box_size,box_size,depth)
//       pop()
//     }
//   }
// }