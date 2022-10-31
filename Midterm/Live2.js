class Live2 extends Lives {
    constructor(lx,ly){
        super(lx,ly)
    }

    //callling the rectangle through the extender function
    show () {
        super.show()
        // rect(this.lx,this.ly, 25,25);
        rect(80, 20, 25, 25);
        (pop);
        // rect(this.lx+60, this.ly, 25, 25);
    }
}