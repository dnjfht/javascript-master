const num1 = 123;
const num2 = new Number(123);
const str1 = "123";
console.log(num1);
console.log(typeof num1);
// number => 123
console.log(typeof Number(str1));
// Number() 함수를 이용해 문자열을 숫자로 변환
console.log(num2);
console.log(typeof num2);
// object => [Number : 123]
