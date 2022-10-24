let note = [];
let tracks; 

function setup() {
  createCanvas(windowWidth, windowHeight)
  tracks = new Track(8,4) 
  addNotes(20)
  ellipseMode(CENTER);

}

function addNotes (number) {
  for (let i = 0; i < number; i++) {
    let lanep = Math.floor(random(2, 9));
    note[i] = new notes (-(tracks.getHeight()*i),tracks.getSize(), tracks.getLane(lanep))
  }
}

function draw() {
  background(100)

  for (let i = 0; i < note.length; i++) {
    note[i].show();
    note[i].move (tracks.getSpeed());
  }

  }

  function Track (track, speed) {
    this.getSpeed = function () {
        return speed
    }

    this.getSize = function () {
        return width/track
    }

    this.getLane = function (lane) {
        return this.getSize()* (lane - 1)
    }

    this.getHeight = function () {
        return this.getSize + (width/10)
    }
}

 
  
