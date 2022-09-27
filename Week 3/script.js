let ball = {
  x: 100,
  y: 300
}

let ballArray = [
  //makeBall (600,300), 
  //makeBall (200,100)

]

//let numberArray = [1,2,3,4,5,6,7,8,10]

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (let i = 0; i < 5; i++) {
    ballArray.push (new Ball (random(width),random(height)))
    //(makeBall(
      //random(width),
     // random(height)))

  }

  console.log(ballArray)

}

function draw() {
  background(100)

  for (let i = 0; i < ballArray.length; i++){
    //ellipse(ballArray[i].x, ballArray[i].y, 100)
    ballArray[i].display()
    ballArray[i].move()

  }

  //ellipse(ball.x, ball.y, 100,100)
}

function makeBall(x,y) {
  let ball = {
    x: x,
    y: y

  }

  return ball

  }

  class Ball {
    constructor(x,y){
      this.x = x
      this.y = y
      this.SpeedX = random (-1,1)
      this.SpeedY = random (-1,1)
      this.color = color (120,100,0)
    }

    move(){
      this.x += this.SpeedX
      this.y += this.SpeedY
    }

    display(){
      ellipse(this.x, this.y, 100)
    }
  }
