
function setup() {
  createCanvas(windowWidth, windowHeight)

}

function draw() {
  background(0)
  stroke(255)

  let space = width/40

  for (let x = 0; x < width; x += space)  {  
    line (x, height/2, x, height/2 - 100)
  }

}