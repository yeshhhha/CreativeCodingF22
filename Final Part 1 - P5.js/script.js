// Concept: Creating a physical interface model for manipulating elements through your hand and displaying it on the screen
// The user will first select a button to define the modes
// After a mode has been selected the user can manipulate the elements with the ultrasonic sensors


//Defining the global variables and arrays
let serial;
let data;
let value = [1.1, 0.55, ""];
let art;

function setup() {
  createCanvas(windowWidth, 0);

  //Defining the serial input data
  serial = new p5.SerialPort();
  serial.openPort("/dev/tty.usbmodem1101");
  serial.on("data", getData);
}

function draw() {
  background(0);

  //Setting the Switch case for button mode with html id

  //Fire Switch
  if (value)
    if (value[2] == "FIRE") {
      if (art) art.remove();
      art = new p5(fireSketch, window.document.getElementById("art"));
      let x0 = document.getElementById("art");
      if (x0.style.display === "none") {
        x0.style.display = "block";
      }

      let x = document.getElementById("art1");
      x.style.display = "none";

      let x1 = document.getElementById("art2");
      x1.style.display = "none";

    }

  //Earth Switch  
  if (value[2] == "EARTH") {
    if (art) art.remove();
    art = new p5(earthSketch, window.document.getElementById("art1"));
    let x0 = document.getElementById("art1");
    if (x0.style.display === "none") {
      x0.style.display = "block";
    }
    let x = document.getElementById("art");
    x.style.display = "none";

    let x1 = document.getElementById("art2");
    x1.style.display = "none";
  }

  //Water Switch
  if (value[2] == "WATER") {
    if (art) art.remove();
    art = new p5(waterSketch, window.document.getElementById("art2"));
    let x0 = document.getElementById("art2");
    if (x0.style.display === "none") {
      x0.style.display = "block";
    }

    let x = document.getElementById("art");
    x.style.display = "none";

    let x1 = document.getElementById("art1");
    x1.style.display = "none";
  }

}

//Get Data function to pull values from the sensors
function getData() {
  data = trim(serial.readLine());
  if (!data) return;
  value = data.split(",");
  value[0] = value[0] > 120 ? 0 : value[0];
  value[1] = value[1] > 120 ? 0 : value[1];
  console.log(value);
}

//Fire Sketch Function 
//Creating a function to define the fire state, so it can be called and switched with the switch case, using P5.js instance mode
let fireSketch = function (f) {
  let start = 0;
  
  //Fire Setup
  f.setup = function () {
    f.createCanvas(f.windowWidth, f.windowHeight, f.WEBGL); //adding WEBGL to enable 3D elements
    f.angleMode(f.DEGREES); //setting the angle mode to degrees
    f.noiseDetail(5); // defining how detailed the noise added should be
  }

  //Fire Draw Loop
  f.draw = function () {
    f.background(0);

    //3D spinning torus
    let scaleValue = f.int(value[0]) + f.int(value[1]); //Adjusting the values according to the two ultrasonic sensors
    // console.log(scaleValue);
    if (scaleValue > 50 || scaleValue < 15) {
      scaleValue = 1.1;
    }
    else {
      scaleValue = scaleValue / 30;
    }
    f.stroke(0);
    f.push();
    f.scale(scaleValue); // adjusting the scale to match the outer ring
    f.translate(-40, -4, -f.width / 2); //adjusting the posiiton

    let space = 20; //defining the distance between each torus generated

    for (let i = 0; i < f.width; i += space) {

      let xOff = f.map(f.cos(i), -1, 1, 0, 3); //defining how much the x angle should be offset everytime a torus is generated
      let yOff = f.map(f.sin(i), -1, 1, 0, 3); //defining how much the y angle should be offset everytime a torus is generated

      let n = f.noise(xOff, yOff + start); //mapping the noise element with the start position

      let h = f.map(n, 0, 1, -150, 150); //defining the height & mapping the position

      let r = f.map(h, 255, 255, 100, 55); //mapping the r value for random ranges in red
      let g = f.map(h, 150, 255, 180, 245); //mapping the g value for random ranges in green
      let b = f.map(h, 200, 255, 0, 155); // mapping the b value for random ranges in blue

      f.fill(r, g, b); //fill colour of the elements

      f.rotateX(space); //rotating the X axis with the amount of space
      f.rotateY(space); //rotating the Y axis witht he amount of space
      f.rotateZ(h / 5); //rotating the Z axis with the height
      f.torus(400, 4, 24, 16); //creating the torus

    }

    start += 0.05; //start position & speed

    //3D Fire Ring
    //Inspired by: ColourfulCoding https://www.youtube.com/watch?v=0YvPgYDR1oM&ab_channel=ColorfulCoding

    f.pop();

    f.push();
    f.scale(scaleValue / 2.015); //adjusting the scale to match the 3D torus 
    f.translate(-f.width / 55, -f.height / 42); //adjusting the position to match the 3D torus
    f.noStroke();

    let spaceF = 0.1; //defining the space and rate generated

    for (let i = 0; i < f.width; i += spaceF) {

      let xfOff = f.map(f.cos(i), -10, 10, 10, 23); //defining the X offset angle
      let yfOff = f.map(f.sin(i), -10, 1, 10, 23); //defining the Y offset angle

      let nf = f.noise(xfOff + start, yfOff + start); //mapping the noise element witht he start position

      let hf = f.map(nf, 0, 1, -150, 150); //defining the height & mapping the position

      let rf = f.map(f.sin(i), 255, 255, 100, 55); //mapping the r value for random ranges in red
      let gf = f.map(hf, 150, 255, 180, 245); //mapping the g values for random ranges in green
      let bf = f.map(nf, 200, 255, 0, 200); //mapping the b values for random ranges in blue

      f.fill(rf, gf, bf); // fill colour of the elements

      f.rotate(spaceF); //rotating the ring with the amount of space
      f.rect(400, 0, hf, 1); //generating multiple squares to look like blobs with the amount of noise

    }

    start += 0.01; //start position & speed
    f.pop();

  }
}

//Water Sketch Function 
//Creating a function to define the water state, so it can be called and switched with the switch case, using P5.js instance mode
let waterSketch = function (w) {

  //Defining the water variables and arrays
  let water = []
  let multiplier = 0.005

  //Water Setup
  w.setup = function () {
    w.createCanvas(w.windowWidth, w.windowHeight);
    w.angleMode(w.DEGREES); //setting the angle mode to degrees
    w.noiseDetail(10); // defining how detailed the noise added should be

    let density = 150; //defining the amount of waves generated
    let space = w.width / density; //defining the amount of space between each wave and the length

    for (let x = 0; x < w.width; x += space) {
      for (let y = 0; y < w.height; y += space) {
        let p = w.createVector(x + w.random(-10, 10), y + w.random(-10, 10)); //creating the waves
        water.push(p); //pushing the waves to the canvas
      }
    }

    multiplier = w.random(0.002, 0.01); //defining how many times and the length of each wave

  }

  //Water Draw Loop
  w.draw = function () {
    w.background(10, 10);
    w.noStroke();

    for (let i = 0; i < water.length; i++) {

      let r = w.map(water[i].x, 0, w.width, 50, 65); //mapping the r value for random ranges in red
      let g = w.map(water[i].y, 0, w.height, 60, 90); //mapping the g value for random ranges in green
      let b = w.map(water[i].x, 0, w.width, 255, 150); //mapping the b value for random ranges in blue

      w.fill(r, g, b); //fill colour of the waves

      let angle = w.map(w.noise(water[i].x * multiplier, water[i].y * multiplier), 0, 1, 0, (value[0] + value[1])); //defining the angle at which the waves should be generated using the ultrasonic sensors

      water[i].add(w.createVector(w.cos(angle+value[0]), w.sin(angle+value[0]))); //Creating random waves based on the ultrasonic sensor values

      if (w.dist(w.width / 2, w.height / 2, water[i].x, water[i].y) < 300) { //creating a circular mask around the ellipse | //Inspired by: Colourful Coding https://www.youtube.com/watch?v=1-QXuR-XX_s&ab_channel=ColorfulCoding
        w.ellipse(water[i].x, water[i].y, 1);
      }

      if (!onScreen(water[i])) { //defining that if the waves go off the screen to generate a new one at a random x and y position
        water[i].x = w.random(w.width);
        water[i].y = w.random(w.height);
      }
    }

    function onScreen(v) { //creating the function to see if the wave is on or off the screen
      return v.x >= 0 && v.x <= w.width && v.y >= 0 && v.y <= w.height;
    }

  }

}

//Earth Sketch Function 
//Creating a function to define the earth state, so it can be called and switched with the switch case, using P5.js instance mode
let earthSketch = function (e) {

  //Defining the eart variables and arrays
  let terrain = [];
  let multiplier = 100;
  let xoff = 0;
  let yoff = 0;
  let zoff = 0;
  let incline = 0.1;
  let zincline = 0.02;

  //Earth Setupt
  e.setup = function () {
    e.createCanvas(e.windowWidth, e.windowHeight, e.WEBGL);
    e.angleMode(e.DEGREES); //setting the angle mode to degrees

    //mapping out the terrain to it's values
    for (let x = 0; x < 60; x++) {
      terrain.push([]);
      for (let y = 0; y < 60; y++) {
        terrain[x][y] = e.map(e.noise(x, y), 0, 1, -1, -multiplier, multiplier);
        xoff = xoff + incline;
      }
      yoff = yoff + incline;
    }

  }

  //Earth Draw Loop
  e.draw = function () {
    e.background(0);

    let scaleValue = e.int(value[1]); //Defining the scale with the second ultrasonic sensor

    e.stroke('#2BB02B');
    e.noFill();
    e.strokeWeight(2.5);
    e.scale(scaleValue / 2.015); //Defining how large the terrain should be
    zincline = (value[0] + 1) % 500; //Adjusting the incline position with the first ultrasonic sensor
    // incline = value[0]; //to move up and down
    e.translate(150, incline * 10, zincline); // adjusting the position of the terrain
    e.rotateX(85); // adding rotation to the background to the terrain looks like it is on flat ground
    e.translate(-e.width / 2, -e.height / 2);
    for (let y = 0; y < 60; y++) {
      // generating the terrain using the p5 TRIANGLE_STRIP element | Inspired by: Hritik RC https://www.youtube.com/watch?v=_Tyhfpxwips&ab_channel=HritikRC
      e.beginShape(e.TRIANGLE_STRIP); 
      //defining the x & y posisitons of each vector created
      for (let x = 0; x < 60; x++) {
        e.vertex(x * 20, y * 20, terrain[x][y]);
        e.vertex(x * 20, (y + 1) * 20, terrain[x][y]);
      }
      e.endShape();
    }
  }


}