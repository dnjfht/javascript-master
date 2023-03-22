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
//object => [Boolean : true]
