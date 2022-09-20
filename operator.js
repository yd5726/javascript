// 0. 대입 연산자 : =

let k = 10; // k라는 변수를 메모리에 선언(=생성)하고 숫자타입 데이터 10을 저장한다.
            // 이때 10이라는 데이터(우향)가 k라는 변수(좌향)으로 대입(=할당, 저장)된다.
/*            
console.log("k의 값 : " + k);
*/
// 1. 산술 연산자 : +, -, *, /, %
// 1-1. 문자연결 연산자 : + (덧셈이 아닌 문자열끼리 이어서 쓰는 연산자)

let n1 = 10;

let n2 = 50;
/*
console.log("덧셈 결과 : " + n1 + n2);
console.log("뺄셈 결과 : " + n1 - n2);
console.log("곱셈 결과 : " + n1 * n2);
console.log("나눗셈 결과 : " + n1 / n2);
*/
// 2. 복합 대입 연산자 : +=, -=, *=, /=, %=

n1 += 100;
/*
console.log("n1 += 100의 결과 : " + n1);
*/
n1 -= 100;
/*
console.log(`n1 -= 100의 결과 : ${n1}`);
*/
// 3. 증감 연산자 : ++, --
// 위치에 따른 결과가 달라짐 : A = B++ vs A=++B 와 다른 결과
let a = 10;
let b = 20;
/*
console.log(`a : ${a}, b : ${b}`);
console.log("a++ : "+ a++);
console.log("++a : " + ++a);
console.log(a = b++);
console.log(`a : ${a}, b : ${b}`);
console.log(a = ++b);
console.log(`a : ${a}, b : ${b}`);
*/
// 4. 비교 연산자 : ==, ===, !=, >, >=, <, <=
// 연산의 결과가 논리값을 반환
/*
console.log(1=='1'); // 값만 비교
console.log(1==='1'); // 값, 자료형 비교
*/
// 5. 논리 연산자 : AND, OR, NOT
let bool1 = true;
let bool2 = false;
/*
console.log(bool1 && bool2);  // false
console.log(bool1 || bool2);  // true
console.log(!bool1);  // false

console.log()
*/
// 6. 삼항 조건 연산자 : 조건 ? true일때  실행 표현식 : false일때 실행 표현식;
// 간단한 조건식
let n3 = 10;
let n4 = 20;
/*
n3 > n4 ? console.log('n1이 n2보다 크다') : console.log('n1이 n2보다 크지 않다');
*/
// 7. 우선순위 연산자 : ()
let j = 1 + '100';
console.log(j, typeof j, Number(j), typeof Number(j));  // 형변환

let h = (1+100) * 3 / 3;
console.log("h의 결과값 : " + h);

let h1 = 1 + 100 * 3 / 3;
console.log("h1의 결과값 : " + h1);