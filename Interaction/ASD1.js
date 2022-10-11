class ASD1 extends Asteroid {
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