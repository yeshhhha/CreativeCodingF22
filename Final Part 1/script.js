let serial;
let data;
let value = [1.1, 0.55, ""];
let art;
let old = "";

function setup() {
  createCanvas(windowWidth, 0);
  serial = new p5.SerialPort();
  serial.openPort("/dev/tty.usbmodem1101");
  serial.on("data", getData);
}

function draw() {
  background(0);
  // textSize(40)
  // text('Final Project Creative Coding Fall 2022', width / 2, 80);
  // textAlign(CENTER, CENTER)
  // fill(0)
  if (value)
    if (value[2] == "FIRE") {
      if (art) art.remove();
      art = new p5(fireSketch, window.document.getElementById("art"));
      var x0 = document.getElementById("art");
      if (x0.style.display === "none") {
        x0.style.display = "block";
      }

      var x = document.getElementById("art1");
      x.style.display = "none";

      var x1 = document.getElementById("art2");
      x1.style.display = "none";

    }
  if (value[2] == "EARTH") {
    if (art) art.remove();
    art = new p5(earthSketch, window.document.getElementById("art1"));
    var x0 = document.getElementById("art1");
    if (x0.style.display === "none") {
      x0.style.display = "block";
    }
    var x = document.getElementById("art");
    x.style.display = "none";

    var x1 = document.getElementById("art2");
    x1.style.display = "none";
  }
  if (value[2] == "WATER") {
    if (art) art.remove();
    art = new p5(waterSketch, window.document.getElementById("art2"));
    var x0 = document.getElementById("art2");
    if (x0.style.display === "none") {
      x0.style.display = "block";
    }

    var x = document.getElementById("art");
    x.style.display = "none";

    var x1 = document.getElementById("art1");
    x1.style.display = "none";
  }

  // switch(value[2]){
  //   case "FIRE":
  //     art = new p5(fireSketch);
  //     break;
  //   case "WATER":
  //     art = new p5(waterSketch);
  //     break;
  //   case "EARTH":
  //     art = new p5(earthSketch);
  //     break;
  //   default:
  // }

}

function getData() {
  data = trim(serial.readLine());
  if (!data) return;
  value = data.split(",");
  value[0] = value[0] > 120 ? 0 : value[0];
  value[1] = value[1] > 120 ? 0 : value[1];
  // value[2] = value[2] == "" ? "FIRE" : value[2];
  console.log(value);
}

let fireSketch = function (f) {
  let start = 0;
  f.setup = function () {
    f.createCanvas(f.windowWidth, f.windowHeight, f.WEBGL); //adding WEBGL to enable 3D elements
    f.angleMode(f.DEGREES) //setting the angle mode to degrees
    f.noiseDetail(5) // defining how detailed the noise added should be
  }

  f.draw = function () {
    f.background(0);

    //3D spinning torus
    let scaleValue = f.int(value[0]) + f.int(value[1]);
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

      let xOff = f.map(f.cos(i), -1, 1, 0, 3) //defining how much the x angle should be offset everytime a torus is generated
      let yOff = f.map(f.sin(i), -1, 1, 0, 3) //defining how much the y angle should be offset everytime a torus is generated

      let n = f.noise(xOff, yOff + start) //mapping the noise element with the start position

      let h = f.map(n, 0, 1, -150, 150) //defining the height & mapping the position

      let r = f.map(h, 255, 255, 100, 55) //mapping the r value for random ranges in red
      let g = f.map(h, 150, 255, 180, 245) //mapping the g value for random ranges in green
      let b = f.map(h, 200, 255, 0, 155) // mapping the b value for random ranges in blue

      f.fill(r, g, b); //fill colour of the elements

      f.rotateX(space); //rotating the X axis with the amount of space
      f.rotateY(space); //rotating the Y axis witht he amount of space
      f.rotateZ(h / 5); //rotating the Z axis with the height
      f.torus(400, 4, 24, 16); //creating the

    }

    start += 0.05 //start position & speed

    //3D Fire Ring

    f.pop();

    f.push();
    f.scale(scaleValue / 2.015) //adjusting the scale to match the 3D torus 
    f.translate(-f.width / 55, -f.height / 42) //adjusting the position to match the 3D torus
    f.noStroke()

    let spaceF = 0.1 //defining the space and rate generated

    for (let i = 0; i < f.width; i += spaceF) {

      let xfOff = f.map(f.cos(i), -10, 10, 10, 23) //defining the X offset angle
      let yfOff = f.map(f.sin(i), -10, 1, 10, 23) //defining the Y offset angle

      let nf = f.noise(xfOff + start, yfOff + start) //mapping the noise element witht he start position

      let hf = f.map(nf, 0, 1, -150, 150) //defining the height & mapping the position

      let rf = f.map(f.sin(i), 255, 255, 100, 55) //mapping the r value for random ranges in red
      let gf = f.map(hf, 150, 255, 180, 245) //mapping the g values for random ranges in green
      let bf = f.map(nf, 200, 255, 0, 200) //mapping the b values for random ranges in blue

      f.fill(rf, gf, bf); // fill colour of the elements

      f.rotate(spaceF); //rotating the ring with the amount of space
      f.rect(400, 0, hf, 1) //generating multiple squares to look like blobs with the amount of noise

    }

    start += 0.01 //start position & speed
    f.pop();

  }
}

// let fireLoad = new p5(fireSketch);


let waterSketch = function (w) {

  let points = []
  let multiplier = 0.005

  w.setup = function () {
    w.createCanvas(w.windowWidth, w.windowHeight);
    w.angleMode(w.DEGREES) //setting the angle mode to degrees
    w.noiseDetail(10) // defining how detailed the noise added should be

    let density = 150 //defining the amount of waves generated
    let space = w.width / density //defining the amount of space between each wave and the length

    for (let x = 0; x < w.width; x += space) {
      for (let y = 0; y < w.height; y += space) {
        let p = w.createVector(x + w.random(-10, 10), y + w.random(-10, 10)) //creating the waves
        points.push(p) //pushing the waves to the canvas
      }
    }

    multiplier = w.random(0.002, 0.01) //defining how many times and the length of each wave

  }

  w.draw = function () {
    w.background(10, 10);
    w.noStroke();

    for (let i = 0; i < points.length; i++) {

      let r = w.map(points[i].x, 0, w.width, 50, 65) //mapping the r value for random ranges in red
      let g = w.map(points[i].y, 0, w.height, 60, 90) //mapping the g value for random ranges in green
      let b = w.map(points[i].x, 0, w.width, 255, 150) //mapping the b value for random ranges in blue

      w.fill(r, g, b); //fill colour of the waves

      let angle = w.map(w.noise(points[i].x * multiplier, points[i].y * multiplier), 0, 1, 0, (value[0] + value[1])) //defining the angle at which the waves should be generated

      points[i].add(w.createVector(w.cos(angle+value[0]), w.sin(angle+value[0])))

      if (w.dist(w.width / 2, w.height / 2, points[i].x, points[i].y) < 300) { //creating a circular mask around the ellipse
        w.ellipse(points[i].x, points[i].y, 1)
      }

      if (!onScreen(points[i])) { //defining that if the waves go off the screen to generate a new one at a random x and y position
        points[i].x = w.random(w.width);
        points[i].y = w.random(w.height);
      }
    }

    function onScreen(v) { //creating the function to see if the wave is on or off the screen
      return v.x >= 0 && v.x <= w.width && v.y >= 0 && v.y <= w.height;
    }

  }

}

let earthSketch = function (e) {

  let terrain = [];
  let multiplier = 100;
  let xoff = 0;
  let yoff = 0;
  let zoff = 0;
  let incline = 0.1;
  let zincline = 0.02;

  e.setup = function () {
    e.createCanvas(e.windowWidth, e.windowHeight, e.WEBGL);
    e.angleMode(e.DEGREES) //setting the angle mode to degrees

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

  e.draw = function () {
    e.background(0);

    let scaleValue = e.int(value[1]);

    e.stroke('#2BB02B');
    e.noFill();
    e.strokeWeight(2.5);
    e.scale(scaleValue / 2.015)
    zincline = (value[0] + 1) % 500;
    // incline = value[0]; //to move up and down
    e.translate(150, incline * 10, zincline); // adjusting the position of the terrain
    e.rotateX(85); // adding rotation to the background to the terrain looks like it is on flat ground
    e.translate(-e.width / 2, -e.height / 2);
    for (let y = 0; y < 60; y++) {
      e.beginShape(e.TRIANGLE_STRIP); // generating the terrain using the p5 TRIANGLE_STRIP element
      for (let x = 0; x < 60; x++) {
        //defining the x & y posisitons of each vector created
        e.vertex(x * 20, y * 20, terrain[x][y]);
        e.vertex(x * 20, (y + 1) * 20, terrain[x][y]);
      }
      e.endShape();
    }
  }


}

// let waterLoad = new p5(waterSketch);
// let earthLoad = new p5(earthSketch);