class Live3 extends Lives {
    constructor(lx,ly){
        super(lx,ly)
    }

    //callling the rectangle through the extender function
    show () {
        super.show()
        rect(110, 20, 25, 25);
        pop();
    }
}