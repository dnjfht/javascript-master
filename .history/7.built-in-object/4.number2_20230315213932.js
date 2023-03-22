const num1 = 123;
const num2 = new Number(123);
const str1 = "123";
console.log(num1);
console.log(typeof num1);
console.log(typeof Number(str1));
// number => 123
console.log(num2);
console.log(typeof num2);
// object => [Number : 123]
