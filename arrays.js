// 배열 연산자 : Array

// 변수 vs 배열 : 값을 1개만 저장 vs 여러 개의 값을 저장

// 변수
let k = 10; // 변수
const j = 100; // 상수

k = 50;  // 재할당
console.log(k);
/*
j = 50;  // 상수(=변하지 않는 수, 재할당 시 오류 발생)
console.log(j);
*/
// 배열 선언 : 리터럴 생성자
// 배열[인덱스] : 0 부터 배열 길이 값 n-1까지
let arr1 = [1, 10, '100','광주',null];
/*
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
arr1[2] = '백';
console.log(arr1);
*/
// JS : 배열의 원소값은 변경 가능!
const arr2 = new Array('1',null,100,50,'A');
arr2[1] = true;
console.log(arr2);

// 배열의 메소드와 프로퍼티
// 배열명.(메소드 or 프로퍼티 자동 추천)
const arr3 = ['가','나','다'];

// .length : 배열의 길이값(=원소 갯수) 출력하는 프로퍼티(=속성)
console.log("arr2.length : " + arr2.length);

// .concat() : 배열끼리 연결, 새로운 배열을 반환하는 메소드
console.log(arr2.concat(arr3));

// .join() : 배열 원소를 '문자열'로 연결한 결과를 반환하는 메소드
console.log(arr2.join('/'));

// .pop() : 배열의 마지막 원소를 제거하고 그 원소를 반환
console.log(arr2.pop());
console.log(arr2);

// .push() : 배열의 마지막 원소를 추가
console.log(arr2.push('C'));
console.log(arr2);

// 문자x, 문자열o
let myStr = '가나다라마바사아자차카타파하';
console.log(myStr[0]);

// 0번 인덱스에 있는 문자열의 데이터를 출력
console.log(myStr.charAt(0));
console.log("-----------------------------");
console.log(arr2);

// 배열의 첫 번째 원소를 제거하고 그 원소를 반환
console.log(arr2.shift());
console.log("shift된 arr2 : " + arr2);

// 배열의 첫 번째 원소를 추가
console.log(arr2.unshift('홍'));
console.log("unshift된 arr2 : " + arr2);

// .sort(), .reverse() : 정렬, 역정렬
console.log("-----------------------------");
console.log(arr2);
console.log(arr2.sort());
console.log(arr2.reverse());