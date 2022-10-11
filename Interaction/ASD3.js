class ASD3 extends Asteroid { //calling the parent class to add its values to the child class
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
      image(asteroid3, 0, 0, this.sz);
      pop()
    }
  }