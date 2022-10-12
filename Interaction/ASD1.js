class ASD1 extends Asteroid { //calling the parent class to add its values to the child class
    constructor(pos,speed,sz){
      super(pos,speed,sz)   
    }

    clicked(){
        super.clicked()
    }
  
    move(){
      super.move()
    }
  
    display(){
      super.display()
      image(asteroid1, 0, 0, this.sz);
      pop()
    }
  }