// function setup () {
//   createCanvas(windowWidth, windowHeight, WEBGL);

//   angleMode(DEGREES)
//   noiseDetail(10)

// }

// function draw () {
//   background(250);

//   // strokeWeight(0)

//   translate (0, 0, -width/2)

//   let space = 30

//   for (let i = 0; i < width; i += space) {

//     let xOff = map (cos(i), -1, 1, 0, 3)
//     let yOff = map (cos(i), -1, 1, 0, 3)
    
//     let n = noise (xOff, yOff)

//     let h = map (n, 0, 1, -150, 150)

//     rotateZ(frameCount * 0.01);
//     rotateX(frameCount * 0.01);
//     rotateY(frameCount * 0.01);
//     torus (350,10,24,16);


//   // pop();

//   }

//   // translate (0, 0, 0);
//   // push();
  
// }