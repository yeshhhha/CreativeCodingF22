class Live3 extends Lives {
    constructor(lx,ly){
        super(lx,ly)
    }

    show () {
        super.show()
        // rect(this.lx,this.ly, 25,25);
        // rect(this.lx+30, this.ly, 25, 25);
        rect(110, 20, 25, 25);
        pop();
    }
}