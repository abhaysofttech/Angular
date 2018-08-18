class PointB{
    constructor(private x?:number, private y?:number){

    }
    drew(){
        console.log('X:' + this.x + ', Y:' + this.y);
    }

    get X(){
        return this.x;
    }

    set X(value){
        if(value < 0)
        throw new Error('value cannot be less than 0')

        this.x = value;
    }
}

let pointB = new PointB(1,2);
let x = pointB.X;
pointB.X = 10;
pointB.drew();