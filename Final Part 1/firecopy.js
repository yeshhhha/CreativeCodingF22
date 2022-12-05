let start = 0

function setup () {
  createCanvas(windowWidth, windowHeight, WEBGL);

  angleMode(DEGREES)
  noiseDetail(5)

}

function draw () {
  background(0);
 

  stroke(0)

  translate (0, 0, -width/2)

  let space = 20

  for (let i = 0; i < width; i += space) {

    let xOff = map (cos(i), -1, 1, 0, 3)
    let yOff = map (sin(i), -1, 1, 0, 3)
    
    let n = noise (xOff, yOff + start)

    let h = map (n, 0, 1, -150, 150)

    let r = map(h, 255, 255, 100, 55)
    let g = map(h, 150, 255, 180, 245)
    let b = map(h, 200, 255, 0, 155)
    
    fill(r,g,b);

    rotateX(space);
    rotateY(space);
    rotateZ(h/5);
    torus(400,4,24, 16);

  }

  start += 0.05

  translate (-width/50,-height/40)
  noStroke()
  let spaceF = 0.1

  for (let f = 0; f<width; f += spaceF) {

    let xfOff = map (cos(f), -10, 10, 10, 23)
    let yfOff = map (sin(f), -10, 1, 10, 23)
    
    let nf = noise (xfOff + start, yfOff + start)

    let hf = map (nf, 0, 1, -150, 150)

    let rf = map(sin(f), 255, 255, 100, 55)
    let gf = map(hf, 150, 255, 180, 245)
    let bf = map(nf, 200, 255, 0, 200)
    
    fill(rf,gf,bf);

    rotate(spaceF);
    // rotateX(spaceF);
    // rotateY(spaceF);
    // rotateZ(spaceF);
    rect(500,0,hf,1)

  }
  
  start += 0.01

}