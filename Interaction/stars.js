class Star {
    constructor (x,y,s) {
        this.x = x;
        this.y = y;
        this.s = s;
  
    }
  
    move () {
      this.x = this.x + random (-0.5,0.5);
      this.y = this.y + random (-0.5,0.5);
    }
  
    display () {
      strokeWeight(0);
      fill(255);
      ellipse(this.x, this.y, this.s*2);
    }
  
  }