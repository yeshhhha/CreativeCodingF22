// Concept: Creating a version of pianotiles/beatsaber music 
// games where the user has to click the note object in a lane object to get rid of it
// if the user successfully clicks -> success message, if the user doesn't -> game over
// in the background there will be a disc object which will roatate to indicate the music is playing

let note = [];
let tracks; 

function setup() {
  createCanvas(windowWidth, windowHeight)
  tracks = new Track(8,4) 
  addNotes(20)
  ellipseMode(CENTER);

}
//inspiration to get full integers from https://www.youtube.com/watch?v=jx0w8dJJo-g
function addNotes (number) {
  for (let i = 0; i < number; i++) {
    let lanen = Math.floor(random(2, 9));
    note[i] = new notes (1,tracks.getSize(), tracks.getLane(lanen))
  }
}

function draw() {
  background(100)

  for (let i = 0; i < note.length; i++) {
    note[i].show();
    note[i].move (tracks.getSpeed());
  }

  }

  
 
  
