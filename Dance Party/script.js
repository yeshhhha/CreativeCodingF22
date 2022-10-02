
let ball =  {
  x: 1670,
  y: 720,
}

let ballArray = [];

let numBalls = 10;

function setup() {
  createCanvas(2500, 800);

//Section 4

  for (let bl = 0; bl < 180; bl++) {
    ballArray.push (new Ball (2000,500))
    //console.log(ballArray)
  }
}

function draw() {
 background(0);
 frameRate(4);

 //Section 1 
 
 for (let a = 20; a <= 250; a += 50) {
    for (let b = 30; b <= 760; b += 50) {
      fill(random(225), random(225), random(225));
      rect(a, b, 30, 30);
      
    }
  }

  strokeWeight(0);

  //Section 2

  //Yellow Rectangle
  fill(237,220,63);
  rect(280,30, 200,730);

  //Orange Rectangle 2
  fill(241,190,59);
  rect(470,30, 200,730);

  //Orange Rectangle 3
  fill(241,168,59);
  rect(670,30, 200,730);

  //Orange Rectangle 4
  fill(241,125,59);
  rect(870,30, 200,730);


  //Y Rect Pins
  for (let y1a = 320; y1a <= 440; y1a += 50) {
    for (let y1b = 320; y1b <= 480; y1b += 50) {
      fill(random(245,260,30), random(255,180,40), random(50));
      ellipse(y1a, y1b, 30, 30);
      
    }
  }

  //O2 Rect Pins
  for (let o1a = 520; o1a <= 640; o1a += 50) {
    for (let o1b = 320; o1b <= 480; o1b += 50) {
      fill(random(255,195,30), random(255,120,10), random(20));
      ellipse(o1a, o1b, 30, 30);
      
    }
  }

  //O3 Rect Pins
  for (let o2a = 720; o2a <= 840; o2a += 50) {
    for (let o2b = 320; o2b <= 480; o2b += 50) {
      fill(random(255,165,0), random(204,110,10), random(0));
      ellipse(o2a, o2b, 30, 30);
      
    }
  }

  //O4 Rect Pins
  for (let o3a = 920; o3a <= 1040; o3a += 50) {
    for (let o3b = 320; o3b <= 480; o3b += 50) {
      fill(random(255,65,50), random(60,80,93), random(0));
      ellipse(o3a, o3b, 30, 30);
      
    }
  }

//Section 3

  for (let barx = 1100; barx <= 1680; barx +=100) {
    for (let bary = 760; bary <=760; bary +=50){
      fill(random(255), random(255), random(255),);
      rect(barx, bary, 80, random(-height));
    }
  }

//Section 4

for (let bl = 0; bl < ballArray.length; bl++){
  //ellipse(ballArray[i].x, ballArray[i].y, 100)
  ballArray[bl].display()
  ballArray[bl].move()
  }
}

function makeBall(x,y) {
  let ball = {
    x: x,
    y: y

  }
}

class Ball {
  constructor(x,y){
    this.x = x
    this.y = y
    this.SpeedX = random (1,-1)
    this.SpeedY = random (1,-1)
    this.color = color (139,248,255)
  }

  move(){
    this.x += this.SpeedX * 100
    this.y += this.SpeedY * 100



    if (this.x < 1820 || this.x > 2400){
      this.SpeedX= -this.SpeedX;
     
     if (this.y > 720 || this.y < 80) {
       this.SpeedY = -this.SpeedY;
     }
       
     }

  }

  display(){
    ellipse(this.x, this.y, 40)
    fill (139,248,355)
  }
}




// for (let i = 1100; i <=6; i++ ){

  //   let bar = {
  //     barx: 1100,
  //     bary: 760,
  //     h: random (-height),

  //   };


  //   bars.push(bar);

  //   for (let i = 1100; i < bars.legnth; i++){
  //     fill (random(255), random(255), random(255))
  //     rect (bars[i].barx, bars[i].bary, 80, bars[i].h);
  //   }

    // let bx = 1100;
    // let by = 760;
    // let h = random (-height);
    // fill (random(255), random(255), random(255))
    // rect (bx, by, 80, h)

  //}

  // fill (random(255), random(255), random(255));
  // let h = random(-height);
  // rect (1100, 760, 80, h);