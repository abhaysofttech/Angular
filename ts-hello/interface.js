//to avoid the multiple parameter in a function
//like (x,y,z,a,b,c,d,e)
var drawPoint = function (point) {
    console.log(point);
};
drawPoint({
    x: 1,
    y: 2
});
