"use strict";
let isDone = false;
console.log('Boolean', isDone);
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log('Number', decimal, hex, binary, octal);
let blue = "blue";
let red = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log('String', blue, red, sentence);
let listA = [1, 2, 3];
let listB = [1, 2, 3];
console.log('Array', listA, listB);
let ok = ["hello", 10];
console.log('Tuple', ok);
var ColorA;
(function (ColorA) {
    ColorA["Red"] = "#ff0000";
    ColorA["Green"] = "#00ff00";
    ColorA["Blue"] = "#0000ff";
})(ColorA || (ColorA = {}));
var ColorB;
(function (ColorB) {
    ColorB[ColorB["Red"] = 0] = "Red";
    ColorB[ColorB["Green"] = 1] = "Green";
    ColorB[ColorB["Blue"] = 2] = "Blue";
})(ColorB || (ColorB = {}));
var ColorC;
(function (ColorC) {
    ColorC[ColorC["Red"] = 1] = "Red";
    ColorC[ColorC["Green"] = 2] = "Green";
    ColorC[ColorC["Blue"] = 3] = "Blue";
})(ColorC || (ColorC = {}));
let color = ColorB.Green;
console.log('Enum', color);
let notSure = 4;
console.log('Any:number', notSure);
notSure = "maybe a string instead";
console.log('Any:string', notSure);
notSure = false;
console.log('Any:boolean', notSure);
function warnUser() {
    console.log("This is my warning message");
}
let unusable = undefined;
console.log('void', unusable, warnUser());
let u = undefined;
let n = null;
console.log(u, n);
function error(message) {
    throw new Error(message);
}
function create(o) {
    console.log('Object', `created: ${o}`);
}
create({ prop: 0 });
create(null);
let someValue = "this is a string";
let strLength1 = someValue.length;
let strLength2 = someValue.length;
console.log('cast', someValue, strLength1, strLength2);
//# sourceMappingURL=type.js.map