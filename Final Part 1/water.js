//defining the initial elements

let points = []
let multiplier = 0.005

function setup() {
  createCanvas(windowWidth, windowHeight)//, WEBGL)
  angleMode(DEGREES) //setting the angle mode to degrees
  noiseDetail(10) // defining how detailed the noise added should be


  let density = 100 //defining the amount of waves generated
    let space = width/density //defining the amount of space between each wave and the length

  for(let x = 0; x < width; x+= space) {
    for (let y = 0; y < height; y += space) {
        let p = createVector (x + random(-10,10),y + random(-10,10)) //creating the waves
        points.push(p) //pushing the waves to the canvas
    }
  }

  multiplier = random(0.002, 0.01) //defining how many times and the length of each wave

}

function draw() {
  background(10, 10)
  noStroke()

  for (let i = 0; i < points.length; i++) {

    let r = map(points[i].x, 0, width, 50, 65) //mapping the r value for random ranges in red
    let g = map(points[i].y, 0, height, 60, 90) //mapping the g value for random ranges in green
    let b = map(points[i].x, 0, width, 255, 150) //mapping the b value for random ranges in blue

    fill (r,g,b); //fill colour of the waves

    let angle = map(noise(points[i].x * multiplier, points[i].y * multiplier), 0, 1, 0, 260) //defining the angle at which the waves should be generated

    points[i].add(createVector(cos(angle),sin(angle)))

    if(dist(width/2, height/2, points[i].x, points[i].y) < 300) { //creating a circular mask around the ellipse
        ellipse(points[i].x, points[i].y, 1)
    }

    if (!onScreen(points[i])) { //defining that if the waves go off the screen to generate a new one at a random x and y position
        points[i].x = random(width);
        points[i].y = random(height);
    }
  }  

}

function onScreen (v) { //creating the function to see if the wave is on or off the screen
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y<= height;
}