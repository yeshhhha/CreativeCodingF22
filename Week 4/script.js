let shapeArray = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for(let i = 0; i < 100; i++){

    let pos = createVector (width/2, height/2);
    let speed = createVector(random(-1,1), random(0,5));
    let c = color(random(255),random(255),random(255));

    let randomVar = random (0,3)

    if(randomVar < 1) {
    shapeArray.push(new Ball(pos,speed,c))
    } else if (randomVar < 2) {
      shapeArray.push (new Block(pos,speed,c))
    } else {
      shapeArray.push (new Tri(pos,speed,c))
    }

      // createVector(width/2),(height/2),
      // createVector(random(-1,1), random(0,2)),
      // color(random(255),random(255), random(255))
  }

  console.log(shapeArray)
}

function draw() {
  background(100)

  for (let i = 0; i <shapeArray.length; i++) {
    shapeArray[i].move()
    shapeArray[i].display()
  }
}