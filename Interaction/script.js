let stars = [];
let asteroids = [];
let astronaut;
let rockets = [];
let rocket1;
let rocket2;
let asteroid1;
let asteroid2;
let asteroid3;

//Concept: A space setting where the astronaut has to destroy the asteroids and reach to rocket for the goal. 
//Once the sketch is loaded 1. MouseX, Mouse Y will be the astronaut. 
//2. 3 different types of asteroids will load you can press on the asteroid to destroy it. They will become smaller by generating new ones
//3. Finally when the astronaut makes his way to the rocket, 'goal!' will appear

//Image Preloads | Making sure the images load before the sketch starts
function preload() {
  astronaut = loadImage('A1.png');
  rocket1 = loadImage('R1.png');
  asteroid1 = loadImage ('ASD1.png');
  asteroid2 = loadImage ('ASD2.png');
  asteroid3 = loadImage ('ASD3.png');
  rocket2 = loadImage ('R2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  //Background Stars
  for (let i = 0; i < 1000; i++){ // stars are created in a random position across the canvas
    let x = random (width);
    let y = random (height);
    let s = random (0.5,1);
    stars[i] = new Star(x,y,s);
  }

  //Rockets
  for (let rt = 0; rt <= 10; rt++) { //a new rocket is created everytime the sketch loads
    let r = 108;
    let rx = windowWidth - 200
    let ry = windowHeight - 300
    rockets[rt] = new Rocket (r,rx,ry);
  }
  
   //Asteroids
   for (let a = 0; a < 25; a++) {

    //Variables for the sketch to understand
    let pos = createVector (width/2, height/2);
    let speed = createVector(random(1,-1), random(-1,1));
    let sz = random (40,80);

    let randomVar = random (0,6)

    if(randomVar < 1) { // a new asteroid is generated at the set position, speed and size everytime you load
    asteroids.push(new ASD1(pos,speed,sz))
     } else if (randomVar > 1 && randomVar < 2) {
      asteroids.push(new ASD2(pos,speed,sz))
    } else {
      asteroids.push(new ASD3(pos,speed,sz))
    }
  }

} 

function draw() {
  background(0);
  
  //Text Instructions | Information so the user knows what to do once the sketch has loaded
  text ('click on the asteroids to destroy it & reach the rocket!', windowWidth/5, 100, 1000, 100);
  textSize(20);
  textStyle(color(255));
  textAlign(CENTER)

  //Asteroids // Showing and moving the asteroids at random times
  for (let a=0; a<asteroids.length; a++) {
    asteroids[a].move();
    asteroids[a].display();
  }

  //Background Stars // Showing and moving the stars
  translate (0,0)
  for (let i=0; i < stars.length; i++){
  stars[i].move();
  stars[i].display();

  //Rocket // If the astronaut reaches the goal throught mouse over, the rocket image will change to represent that and a text dsiplaying goal will show up
  if ((mouseX > windowWidth-250) && (mouseX < windowWidth) && (mouseY > windowHeight - 500 && mouseY < windowHeight)) {
    image (rocket2, windowWidth-200, windowHeight-300, 108, 280);
    push();
    text('goal!', windowWidth/4, windowHeight/2, windowWidth/2, windowHeight/2, +3);
    fill(200,0,100)
    textSize(100);
    pop();
  } else {
    image (rocket1, windowWidth-200, windowHeight-300, 108, 228)
  }

  //Astronaut Img
  image(astronaut, mouseX, mouseY, 170, 136) 
    
  }

}

//Splitting Asteroids & New Asteroids // Creating new asteroids on a mouse pressed function

function mousePressed(){
  for (let m = 0; m < asteroids.length; m++) {

    //setting the variables for the mouse press
    let pos = createVector (width/2, height/2);
    let speed = createVector(random(1,-1), random(-1,1));
    let sz = random (20,40);

    //defining the distance between the astronaut and the asteroids
    let d = dist(mouseX, mouseY, asteroids[m].pos.x, asteroids[m].pos.y);
    if (d < asteroids[m].sz) {
      asteroids.push (new ASD1(pos,speed,sz)); // new asteroids are created
      asteroids.push (new ASD2(pos,speed,sz));
      asteroids.push (new ASD3(pos,speed,sz));
      asteroids.splice(m,1) // old asteroid is deleted. Splice reference from the coding train
    }
      console.log(asteroids[m]);
  }
}


// Code that didn't work

// //Rocket Img
  // image(rockets[0], windowWidth - 200, windowHeight - 300, 108, 228)

  // //Rockets
  // for (let rt = 0; rt < rockets.length; rt++) {
  //   rockets[rt].move();
  //   rockets[rt].display();
  //   // rockets[rt].collide();



  // }

// function changeRocket(){
//   for (rth = 0; rth < rockets.lengt; rth++) {

//     let r = 108;
//     let rx = windowWidth - 200;
//     let ry = windowHeight - 300;

//     let d = dist(mouseX, mouseY, rockets[rth].rx, rockets[rth].ry);
//     if (d < r + rockets[rth].r) {
//       image (rocket2, rx, ry, r,280)
//     } else {
//       image (rocket1, rx, ry, r, 228)
//     }

//   }
// }

// for (let rt = 0; rt < balls.length; rt++) {
//   let d = dist(this.rx, this.ry, rockets[rt].rx, rockets[rt].ry)

//   if (d >= mouseX + rockets[rt].r) {
//       image (rocket2, this.rx, this.ry, 108, 280)
//   } else {
//       image (rocket1, this.rx, this.ry, 108, 228)
//   }
// }
// }