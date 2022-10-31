class Note {
    constructor(x,y) {
        this.x = x; // X-coordinate
        this.y = y; // Y-coordinate
        this.color = 255; //colour
        this.columnName = this.defineColumn(x); //defining the 4 different columns
    }

    show() {
        fill(this.color);
        strokeWeight(0)
        ellipse(this.x, this.y, w, h);
    }

    move() {
        this.y = this.y + (5); // moving the notes at the speed of 5
    }

    //inspiration from https://www.youtube.com/watch?v=554VpvX2m4E to define the bottom value
    bottom() {
        if (this.y + h > height) {
            return true; // telling the system if the y position is more than the height then to set state to true which will then enact it in the main function
        }
    }

    //KP function that will be called with the key is pressed. If a certain key is pressed then reset(delete and splice) the note to its original position to restart and also to play a certain music note relating to the letter on the track object
    kp () {
       if (keyCode === 70 && this.columnName === 'F') {
            musicNotes[0].play();
            this.reset();
       }
       else if (keyCode === 65 && this.columnName === 'A') {
            musicNotes[1].play();
            this.reset();
       }
       else if (keyCode === 67 && this.columnName === 'C') {
            musicNotes[2].play();
            this.reset();
       }
       else if (keyCode === 69 && this.columnName === 'E') {
            musicNotes[3].play();
            this.reset();
       } 
    }

    //defining the reset function
    reset () {
        this.x = random(colms);
        this.y = random(rows);
        this.columnName = this.defineColumn(this.x);
    }

    //defining the columns for each object note
    defineColumn(xValue) {
        switch (xValue) {
            case 50:
                return 'F'
                break;
            case 150:
                return 'A'
                break;
            case 250:
                return 'C'
                break;
            case 350:
                return 'E'
                break;
            default:
                break;
        }
    }
}