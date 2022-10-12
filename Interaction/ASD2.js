class ASD2 extends Asteroid { //calling the parent class to add its values to the child class
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