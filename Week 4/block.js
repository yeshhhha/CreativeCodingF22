class Block extends Shape {
    constructor (pos, speed,color) {
        super(pos,speed,color)
}

move(){
    super.move()
  }

display() {

    super.display()
    //fill(this.color)
    rectMode(CENTER)
    rect(0, 0, 100, 100)
    pop()
}

}
