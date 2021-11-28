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

import {Point} from "./point"

let point = new Point(2, 5);
point.draw();

