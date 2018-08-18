
//to avoid the multiple parameter in a function
//like (x,y,z,a,b,c,d,e)

let drawPoint = (point: { x: number, y: number }) => {
    console.log(point)
}

drawPoint({
    x: 1,
    y: 2
})

// insted of this we ca use the interface
// Note First Letter of every interface shoud ne Capital Letter
interface Point {
    x: number,
    y: number
}
let newDrawPoint = (point: Point) => {
    console.log(point)
}

newDrawPoint({
    x: 1,
    y: 2

})
