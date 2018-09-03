class Points {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Points) {

    }
}

//let point: Points = new Points();
let point  = new Points();
point.x = 1;
point.y = 2;
point.draw();