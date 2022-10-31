class Live1 extends Lives {
    constructor(lx,ly){
        super(lx,ly)
    }

    //callling the rectangle through the extender function
    show () {
        super.show()
        rect(50,20, 25,25);
        pop();
        // rect(this.lx+30, this.ly, 25, 25);
        // rect(this.lx+60, this.ly, 25, 25);
    }
}