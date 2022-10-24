function notes (position, size, lane) {
    let x = lane;
    let y = position
    let width = size;
    let height = width + (width/10);
  
    this.show = function () {
      ellipseMode(RADIUS);
      fill (255);
      strokeWeight(0);
      ellipse(x, y, width/4,height/4);
      ellipseMode (CENTER);
      
    }
    this.move = function (speed) {
      y = y+speed
    }
  }