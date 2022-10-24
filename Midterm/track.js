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