// Concept: Creating a version of pianotiles/beatsaber music 
// games where the user has to key press the note object in a lane object to get rid of it
// if the user successfully clicks -> continue playing, if the user doesn't -> game over

//Defining Variables & Arrays for Objects
let tracks = [50, 150, 250, 350, 450];
let rows =  [-250, -300, -450, -550, -650];
let colms = [50,150,250,350];
let w = 60;
let h = 60;
let notes = [];
let lives = [];
let start = [50,60,70];
let musicNotes = [];
let counter = 0;

//preloading the sounds for the music notes
function preload() {
  musicNotes[0] = loadSound('F.wav');
  musicNotes[1] = loadSound('A.wav');
  musicNotes[2] = loadSound('C.wav');
  musicNotes[3] = loadSound('E.wav');
}

//telling the system to reset the sketch if game is over
//Inspiration from the coding train
function resetSketch() {
  stroke(255)
  for(let n = 0; n < 4; n++) {
    notes[n] = new Note((random(colms)),(random(rows)));
  }
}

function setup() {
  createCanvas(400, 600);

  resetSketch(); // calling the reset sketch function
  
  //Creating random notes at random locations
  stroke(255)
  for(let n = 0; n < 4; n++) {
    notes[n] = new Note((random(colms)),(random(rows)));
  }
}


function draw() {
  background(color(250, 120,150));

  //Creating the live objects
  for (let l = 0; l < 3; l++) {
    let live = new Lives(40, 20)
    lives.push(live);
    live.show();

    if(notes[l].bottom(true)) {
      lives.splice(l,3); //deleting the lives if the bottom is reached 3 times
    }
  }

  //Text instructions for the column track object to click the note objects
  fill(255);
  textAlign(RIGHT);
  textSize(12)
  text('keypress the letter written above the track to delete the notes', 200, 20, 180, 50);
  textAlign(LEFT);
  textSize(22)
  text('F', 45, 95, 45, 95)
  text('A', 144, 95, 144, 95)
  text('C', 244, 95, 244, 95)
  text('E', 344, 95, 344, 95)



  //Background Tracks
  strokeWeight(1);
  for (let i = 0; i < tracks.length; i++) {
    line(tracks[i], 120, tracks[i], windowHeight);
  }

  //Displaying and Moving the Notes Object
  //Inspiration from my previous set of codes and what we had done in class to show and move objects from classes.
  for (let n=0; n<4; n++) {
    notes[n].show();
    notes[n].move();

    //inspiration from https://www.youtube.com/watch?v=554VpvX2m4E to define the bottom value
    if(notes[n].bottom(true)) { //Telling the system if the note has reached the bottom to enact the following code
      
      fill(0);
      rect(0,80,400,900)
      fill(255);
      textAlign(CENTER)
      text('Game Over', 200, 310)

      //Adding a rest button to call the resetSketch function
      button = createButton("restart")
      button.position(180, 330);
      button.mousePressed(resetSketch)
      // gameOver ();
      }
  }

}

// Deleting the notes based on the key press
function keyPressed() {
  let deletingNote = notes.reduce((prev, curr) => prev.y > curr.y ? prev : curr);
  if (deletingNote.y > 0)
    deletingNote.kp();

} 

//Telling the system that the game is over
function gameOver () {

  if  (notes.bottom == true) {
    text('Game Over')
    console.log(notes.bottom);
  }

}




