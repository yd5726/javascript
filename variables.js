// 변수 선언 키워드 : var vs let[변수]
// ctrl+h : 변경1
// ctrl+d : 변경2
// 1. short, int, long, float, double(java) / number(javascript)
let a = 5;          // number,          Number() : casting
console.log("a의 자료형"+typeof a);

let b = 5.0;        // number
console.log("b의 자료형"+typeof b);

var c = "test";     // string,          String() : casting
console.log(`c의 자료형 : ${typeof c}`);         // template literal 문법

var d = 't';        // string

var e = false;      // boolean

var f = null;       // NULL

var g;              // Undefined

var h = [1,2,3];    // Array,           Array()

var i = {
    name: 'minju',  // object
    job: 'student'
}

var j = function(){
    console.log('hello javascript world!');
}
k = 100;            // 엄격모드 사용시 오류
console.log(k);

// 일반적인 자바스크립트 타입 ==> ES2015 (ES6) 추가된 Symbol(), Class도 있음.