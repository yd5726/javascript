// 문자열(Strings)
let myName = "홍길동";                  // 리터럴
let yourName = new String("김길동");    // 생성자
console.log(typeof myName, typeof yourName);


// 숫자
let myScore = 100;                  // 리터럴
let yourScore = new Number(70);    // 생성자

// 배열(Arrays)
let myArr = [10,20,30];                // 리터럴 : []
let yourArr = new Array(10,20,30);    // 생성자

// 객체(Object)
let myObj = {                         // 리터럴 {} curly brace
    name: "김민주",
    gender: "여",
    liveIn : "남구"
}

let yourObj = new Object({              // 생성자
    name: "홍길동",
    gender: "남",
    born : "장성"
})

console.log(myObj.name, myObj['gender']);
console.log(yourObj.name, yourObj['born']);

let isOk = true;    //python : True;
let isNo = false;   //python : False;

function myFunc(){  // 메소드 : 클래스(객체) 내부에 생성한 함수
    console.log("hellow world");
}