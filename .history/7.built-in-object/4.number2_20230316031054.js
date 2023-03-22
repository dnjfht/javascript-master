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
// 1.02e+2
// e+2 => 10²
// 1.02 * 10²

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
// 1234 / type : String
console.log(num4.toLocaleString("ar-EG"));
// 숫자를 원하는 나라에 맞게 출력하고 싶다면
// ١٬٢٣٤٫١٢ => 아라비아 숫자

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
// 5자릿수까지라고 하였으니 1234.1
console.log(num4.toPrecision(2));
// 전체 자릿수 표기가 안될 때는 지수표기법으로 반환
// 1.2e+3 => 1.2 * 1000 = 1200

console.log(Number.EPSILON);
// 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
// 2.220446049250313e-16
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2;
console.log(num);
// 결과는 0.1이 아니라 0.10000000000000003
// 계산을 할 때 10진수를 2진수로 각각 변환해서 연산한 후 2진수를 다시 10진수로 반환
// 이런 과정에서 정확하게 부동소수점까지 계산이 되지 않아 근소한 오차가 발생할 수 있음
// 이렇게 작은 오차를 나타내는 것이 EPSILON

function isEqual(original, expected) {
  return original === expected;
}

console.log(isEqual(1, 1));
// true
console.log(isEqual(0.1, 0.1));
// true
console.log(isEqual(num, 0.1));
// false
// 0.10000000000000003 !== 0.1

// 미세하게 값의 차이가 있어도 같다고 해주고 싶다면
function isEqual2(original2, expected2) {
  return original2 - expected2 < Number.EPSILON;
}

console.log(isEqual2(num, 0.1));
