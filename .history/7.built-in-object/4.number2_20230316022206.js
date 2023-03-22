const num1 = 123;
const num2 = new Number(123);
// Number 생성자 => Number 객체를 생성
const str1 = new String("123");
// String 생성자 => String 객체를 생성
const str2 = "422574423";
const isTrue = new Boolean(1);
// Boolean 생성자 => Boolean 객체를 생성
console.log(num1);
console.log(num1.toString());
console.log(typeof num1.toString());
// 래퍼객체 toString(); 함수를 이용하여 숫자를 문자로 변경.
// number => 123
console.log(typeof String(num1));
// String 생성자 함수를 new 없이 활용 => new 생성자 함수와는 달리 객체로 바뀌지 X
console.log(typeof num1);
// number => 123
console.log(typeof str1);
// object
console.log(typeof Number(str1));
// Number() 함수를 이용해 문자열을 숫자로 변환
console.log(typeof str2.charAt());
console.log(str2.charAt(3));
// 문자열의 해당하는 인덱스의 문자를 출력
console.log(typeof Boolean(isTrue));
// Boolean() 함수를 이용해 객체를 true로 변환
console.log(num2);
console.log(typeof num2);
// object => [Number : 123]
console.log(isTrue);
console.log(typeof isTrue);
// object => [Boolean : true]

console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
// 5e-324
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991
console.log(Number.NaN);
// NaN
console.log(Number.NEGATIVE_INFINITY);
// -Infinity
console.log(Number.POSITIVE_INFINITY);
// Infinity

if (num1 === Number.NaN) {
  // num1이 숫자인지 아닌지 알고 싶을 때
  console.log("이건 분명 숫자가 아니다.");
} else {
  console.log("이건 분명 숫자가 맞다.");
}

// 바로 직접적으로 비교하는 것이 아닌,
// Number 클래스 안에 isNaN()이라는 정적 함수를 이용할 수 있음
// 숫자가 아닌 값을 찾는 함수
if (Number.isNaN(num1)) {
  console.log("이건 숫자가 아니다");
} else {
  console.log("이건 숫자다");
}

if (num1 > Number.MAX_VALUE) {
  console.log("진실이지롱.");
} else {
  console.log("거짓말이지롱.");
}

// 자수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());
