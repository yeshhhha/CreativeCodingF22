class ShapeSystem {
    constructor(origin) {
        this.shapes = []
        this.origin = origin
    }

    addNew(shape) {
        this.shapes.push(shape)
    }

    makeRandomShape() {
        let pos = createVector(this.origin)
        let speed = createVector(random(-1,1), random(0,5))
        let c = color(
          random(255),random(255),random(255))
      
        let randomVar = random(0, 3)
      
        let shape
      
        if (randomVar < 1) {
          shape = new Ball(pos,speed,c)
        } else if (randomVar < 2) {
          shape = new Block(pos, speed, c)
        } else {
          shape = new Tri(pos, speed, c)
        }
      
        return shape
      }

    updateShapes()  {
    for (let i = 0; i< this.shapes.length; i++) {
      this.shapes[i].move()
      if (this.shapes[i].age > 200) {
        this.shapes.splice(i,1);
      } 
    }
    
    }
  
    displayShapes () {
    this.shapes.forEach((shape) => {
      shape.display()
    })
    } 
}
  
    