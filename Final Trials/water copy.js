
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  angleMode(DEGREES)
  noiseDetail(100)
  // noLoop()
}

function draw() {
  background(0)
  noStroke()

  translate (0,0, -width)

  rotateY(frameCount/4)
  rotateX(frameCount/4)

  translate(-width/2, -height/2, -width/2)

  let space = width/10
  let indexX = 0

  for (let x = 0; x < width; x += space)  {  
 
    let indexY = 0
    for (let y = 0; y < height; y += space) {

      let indexZ = 0
      for (let z = 0; z < width; z += space) {

        push()
        let h = noise (indexX, indexY, indexZ) * 255

        let r = map(h, 10, 45, 150, 25)
        let g = map(h, 150, 55, 180, 205)
        let b = map(h, 220, 255, 250, 255)

        fill(r,g,b);
        
        translate(x,y,z)
        box (space)

        indexZ += 0.1
        pop( )

      }
      indexY += 0.1
    }
    indexX += 0.1
  }

}