
//to avoid the multiple parameter in a function
//like (x,y,z,a,b,c,d,e)

let drawPoint = (point: { x: number, y: number }) => {
    console.log(point)
}

drawPoint({
    x: 1,
    y: 2
})
