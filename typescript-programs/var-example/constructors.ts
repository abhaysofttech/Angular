class dataPoints {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: dataPoints) {

    }
}

//let point: dataPoints = new dataPoints();
let datapoint = new dataPoints(1, 2);

datapoint.draw();