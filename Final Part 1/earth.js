//setting the initial states of the terrain
let terrain = [];
let multiplier = 50;
let xoff = 0;
let yoff = 0;
let zoff = 0;
let incline = 0.1;
let zincline = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL) // adding WEBGL to enable 3D elements
  angleMode(DEGREES); // setting the angle mode to degrees

//mapping out the terrain to it's values
  for(let y = 0; y < 60; y++){
    xoff = 0;
    for(let x = 0; x < 60; x++){
        zoff = 0;
        terrain.push([]);
        for (let z = 0; z < 60; z++) {
            terrain[y][x] = map(noise(x, y,z),0,1,-1, -multiplier, multiplier) // adding noise elements to the terrain to make it look realistic;
            zoff = zoff + zincline //defining the Z index incline
        }
        
        xoff = xoff + incline //defining the X index incline
    }
    yoff = yoff + incline //defining the Y index incline
  }

}

function draw() {
  background(0)

   stroke(0,255,0);
   noFill();

   rotateX(60); // adding rotation to the background to the terrain looks like it is on flat ground
   translate(-width/2, -height/2); // adjusting the position of the terrain

  for(let y = 0; y < 60; y++){
    beginShape(TRIANGLE_STRIP); // generating the terrain using the p5 TRIANGLE_STRIP element
    for(let x = 0; x < 60; x++){
        //defining the x & y posisitons of each vector created
        vertex(x*20, y*20, terrain[x][y]);
        vertex(x*20, (y+1)*20, terrain[x][y]);
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