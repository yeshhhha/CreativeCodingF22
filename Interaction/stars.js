class Star {
    constructor (x,y,s) {
        this.x = x; //x coordinate
        this.y = y; //y coordinate
        this.s = s; // size
  
    }
  
    move () {
      this.x = this.x + random (-0.5,0.5);
      this.y = this.y + random (-0.5,0.5); // moving a certain distance in its position to make it seem more like a star
    }
  
    display () {
      strokeWeight(0);
      fill(255);
      ellipse(this.x, this.y, this.s*2); // defining the stars and how they will look
    }
  
  }