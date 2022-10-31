class Shape {
    constructor(pos, speed, color) {
        this.pos = pos;
        this.speed = speed;
        this.color = color;
        this.age = 0;
        this.theta = random(0, Math.TAU)
        this.rotationSpeed = random(0.1)
    }

    move() {
        this.pos.add(this.speed)
        this.age += 1;
        this.theta += this.rotationSpeed
    }

    display() {
        this.color.setAlpha(255 - this.age)
        fill(this.color)
        noStroke()

        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.theta)
    }
}