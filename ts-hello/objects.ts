
// insted of this we ca use the interface
// Note First Letter of every interface shoud ne Capital Letter
class Point {
    x: number;
    y: number;
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y);
    }
    getDistance(another: Point) {

    }
}
let point = new Point();  // object
point.x = 1;
point.y = 2;
point.draw();