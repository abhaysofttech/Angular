
/*
    in TS we have three type of access modifier
        Public  // by default all members are public
        Private
        Protected
*/
class PointA {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    public draw() {
        console.log('X:' + this.x + ', Y:' + this.y);
    }

}
let pointA = new PointA(1, 2);
pointA.draw()
  