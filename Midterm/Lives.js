class Lives {
    constructor(lx,ly){
        this.lx = lx;
        this.ly = ly;
    }

    show () {
        fill (0);
        text('Lives', 140, 24, 140, 25)
        fill (200,0,0);
        rect(40,20, 25,25);
        rect(70, 20, 25, 25);
        rect(100, 20, 25, 25);

        
    }
}