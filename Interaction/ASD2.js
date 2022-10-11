class ASD2 extends Asteroid {
    constructor(pos,speed,sz){
      console.log(sz);
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
      image(asteroid2, 0, 0, this.sz);
      pop()
    }
  }