class Rocket {
    constructor(r,rx, ry) {
        this.r = r
        this.rx = rx
        this.ry = ry

    }

    move () {
        this.rx = this.rx + random (0,0);
        this.ry = this.ry + random (0,0); //don't need the rocket to move so the position has been set to 0,0 for both x & y
    }

    display () {
        image (rocket1, this.rx, this.ry, 108, 228) // image to be displayed
    }

    collide () { // everytime there is a collide an action should take place
        for (let rt = 0; rt < balls.length; rt++) {
            let d = dist(this.rx, this.ry, rockets[rt].rx, rockets[rt].ry)

            if (d >= mouseX + rockets[rt].r) {
                image (rocket2, this.rx, this.ry, 108, 280)
            } else {
                image (rocket1, this.rx, this.ry, 108, 228)
            }
        }
    }

}
