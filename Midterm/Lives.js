class Lives {
    constructor(lx,ly){
        this.lx = lx; // X-position
        this.ly = ly; // Y-position
    }

    show () {
        fill (0);
        text('Lives', 140, 24, 140, 25) // Lives main text
        fill (200,0,0);
        rect(40,20, 25,25); // Rect Object 1
        rect(70, 20, 25, 25); // Rect Object 2
        rect(100, 20, 25, 25); // Rect Object 3

        
    }
}