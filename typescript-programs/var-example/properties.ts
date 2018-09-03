class dataPointsPoperties {
   
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    get x(){
        return this._x;
    }
    set x(value){
        if(value < 0)
         throw new Error('value cannot be less than 0');
         this._x = value;
    }
}

//let point: dataPointsPoperties = new dataPointsPoperties();
let datapointproperties = new dataPointsPoperties();
let x = datapointproperties.x;  
datapointproperties.x = 10;
datapointproperties.draw();