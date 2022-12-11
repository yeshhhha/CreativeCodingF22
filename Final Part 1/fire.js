//defining the initial position of the element
let start = 0

function setup () {
  createCanvas(windowWidth, windowHeight, WEBGL); //adding WEBGL to enable 3D elements
  // serial = new p5.SerialPort();
  // serial.openPort("/dev/tty.usbmodem1101");
  // serial.on("data", getData);
  angleMode(DEGREES) //setting the angle mode to degrees
  noiseDetail(5) // defining how detailed the noise added should be

}

function draw () {
  background(0);
 
  //3D spinning torus
  let scaleValue = int(value[0]) + int(value[1]);
  // console.log(scaleValue);
  if(scaleValue > 50 || scaleValue < 15){
    scaleValue = 1.1;
  }
  else{
    scaleValue = scaleValue/30;
  }
  stroke(0);
  push();
  scale(scaleValue); // adjusting the scale to match the outer ring
  translate (-40, -4, -width/2); //adjusting the posiiton

  let space = 20; //defining the distance between each torus generated

  for (let i = 0; i < width; i += space) {

    let xOff = map (cos(i), -1, 1, 0, 3) //defining how much the x angle should be offset everytime a torus is generated
    let yOff = map (sin(i), -1, 1, 0, 3) //defining how much the y angle should be offset everytime a torus is generated
    
    let n = noise (xOff, yOff + start) //mapping the noise element with the start position

    let h = map (n, 0, 1, -150, 150) //defining the height & mapping the position

    let r = map(h, 255, 255, 100, 55) //mapping the r value for random ranges in red
    let g = map(h, 150, 255, 180, 245) //mapping the g value for random ranges in green
    let b = map(h, 200, 255, 0, 155) // mapping the b value for random ranges in blue
    
    fill(r,g,b); //fill colour of the elements

    rotateX(space); //rotating the X axis with the amount of space
    rotateY(space); //rotating the Y axis witht he amount of space
    rotateZ(h/5); //rotating the Z axis with the height
    torus(400,4,24, 16); //creating the

  }

  start += 0.05 //start position & speed

  //3D Fire Ring

  pop();

  push();
  scale(scaleValue/2.015) //adjusting the scale to match the 3D torus 
  translate(-width/55,-height/42) //adjusting the position to match the 3D torus
  noStroke()

  let spaceF = 0.1 //defining the space and rate generated

  for (let f = 0; f<width; f += spaceF) {

    let xfOff = map (cos(f), -10, 10, 10, 23) //defining the X offset angle
    let yfOff = map (sin(f), -10, 1, 10, 23) //defining the Y offset angle
    
    let nf = noise (xfOff + start, yfOff + start) //mapping the noise element witht he start position

    let hf = map (nf, 0, 1, -150, 150) //defining the height & mapping the position

    let rf = map(sin(f), 255, 255, 100, 55) //mapping the r value for random ranges in red
    let gf = map(hf, 150, 255, 180, 245) //mapping the g values for random ranges in green
    let bf = map(nf, 200, 255, 0, 200) //mapping the b values for random ranges in blue
    
    fill(rf,gf,bf); // fill colour of the elements

    rotate(spaceF); //rotating the ring with the amount of space
    rect(400,0,hf,1) //generating multiple squares to look like blobs with the amount of noise

  }
  
  start += 0.01 //start position & speed
  pop();

}


function getData() {
  data = trim(serial.readLine());
  if (!data) return;
  value = data.split(",");
  value[0] = value[0] > 120 ? 0 : value[0];
  value[1] = value[1] > 120 ? 0 : value[1];
}