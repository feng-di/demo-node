'use strict;'

// define class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

// "function"
console.log(typeof Point, Point === Point.prototype.constructor);
var valPoint = new Point(15, 30);
console.log(valPoint.toString());

// Object
class Point1 {
    constructor(){
        // ...
    }
}
Object.assign(Point1.prototype, {
    toString(){},
    toValue(){}
});

// 类的属性名，可以采用表达式
let methodName = 'getArea';
class Square {
    constructor(length) {
        // ...
    }

    [methodName]() {
        console.log("Test name");
    }
}
console.log(Square.prototype.getArea);

let s = Symbol();
console.log(typeof s);

let s1 = Symbol();
let obj = {
    [s1]: function (arg) {
        console.log('symbol property' + arg);
    }
};
obj[s1](123);

// es6 可以为函数指定默认值
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello'); // Hello World

// ###########################
var f = v => v;
log(f("test"));

// 等同于
/*
var f = function (v) {
    return v;
};*/


// 正常函数写法
[1,2,3].map(function (x) {
    return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);