// 산술 연산자 (Arithmetic operators)
// +
// -
// *
// /
// %
// ** 지수 (거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 ** 2);
console.log(Math.pow(5, 2)); // 예전에는 제곱을 이렇게 함

// + 연산자 주의점!
let text = "두개의" + "문자를";
console.log(text);
text = "1" + 1; // 숫자와 문자열을 더하면 문자열로 변환됨
console.log(text);
