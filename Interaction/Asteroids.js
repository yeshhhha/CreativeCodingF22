class Asteroid {
    constructor (pos,speed,sz) {
        this.pos = pos;
        this.speed = speed;
        this.theta = random(0, PI/2);
        this.rotationSpeed = random (0.05);
        this.sz = sz
    }
    
    clicked(px,py) { 
        console.log(px, py);
        if (px != undefined && py != undefined)
        {
            console.log(px, py, this.pos.x, this.pos.y);
            
            console.log(d, this);
            if (d < this.sz) {
                console.log("clicked on bubble");
            }
        }
    }


    move(){
    this.pos.add (this.speed)
    this.theta += this.rotationSpeed  

    if (this.pos.x >2820 || this.pos.x < 100){
        this.speed= -this.speed;
       
       if (this.pos.y < 720 || this.pos.y > 80) {
         this.speed = -this.speed;
       }
         
       }


    }  
    
    display() {
        noStroke()
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.theta)
    }
}