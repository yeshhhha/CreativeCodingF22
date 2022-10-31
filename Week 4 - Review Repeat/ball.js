class Ball extends Shape {
  constructor(pos, speed, color) {
    super(pos,speed,color)
  }

  move() {
    super.move()
  }

  display() {
    super.display()
    ellipse(0, 0, 100)
    pop()
  }
}