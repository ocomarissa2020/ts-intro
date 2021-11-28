// function doSomething(){
//     for(var i=0; i<5; i++){
//         console.log(i)
//     }
//     console.log('Finally: '+ i);
// }
// doSomething();
// Types
// variable type
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number []=[1,2,3];
// let f: any [] = [1, true, "a"];
// enum Color {Red=0, Green=1, Blue=2, Purple=3};
// let backgroundColor = Color.Blue;
// Type Assertions
// let message = 'abc';
// let message;
// message = 'abc'
// let endsWithC = (<string>message).endsWith('c');
// let altenativeWay = (message as string).endsWith('c');
// // function
// let log = function(message){
//     console.log(message)
// }
// let doLog = ()=>{console.log(message)}
// let drawPoint = (x,y)=>{
//     //...
// }
// class Point {
//     x : number;
//     y : number;
//     draw (){
//         console.log('X:' + this.x +' '+  'Y:' + this.y)
//     }
//     getDistance(another: Point){
//         //..
//     }
// }
// let drawPoint = (point: Point)=>{
//     //..
// }
// let drawPoint = (point: {x:number, y: number})=>{
//     //..
// }
// Cohesion - things that are related should go together.
// let point = new Point();
// point.x=1;
// point.y=2;
// point.draw();
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this._x + ' ' + 'Y:' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(2, 5);
var x = point.x;
point.x = 20;
point.draw();
