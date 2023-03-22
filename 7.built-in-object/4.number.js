const num1 = 123;
const num2 = new Number(123); // 객체를 만드는 것
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // 정수에서 쓸 수 있는 죄고의 값
console.log(Number.MIN_VALUE); // 정수에서 쓸 수 있는 최소의 값
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 사용할 수 있는 최댓값
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 사용할 수 있는 최솟값
console.log(Number.NaN); // 숫자가 아님
console.log(Number.NEGATIVE_INFINITY); // -무한
console.log(Number.POSITIVE_INFINITY); // 무한

// if (num === Number.NaN) {
// 숫자가 아닌게 맞는지
// }
// if (num1 < Number.MAX_VALUE) {
// num1보다 정수에서 쓸 수 있는 최곳값이 더 큰지
// }
// if (Number.inNaN(num1)) {
// num1이 NaN인지 아닌지 boolean 값으로 알려줌
// }

// 지수표기법 ( 매우 크거나 작은 숫자를 표기활 때 사용, 10의 n층으로 표기)
const num3 = 102;
console.log(num3.toExponential());
// 1.02e+2 => e+2는 10²을 뜻함 => 1.02 * 10²

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 실수가 정수로 변환되어서 문자열로 반환
console.log(num4.toString()); // 숫자를 문자열로 변환
console.log(num4.toLocaleString("ar-EG")); // 그 나라에 맞는 숫자를 표기

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 다 섯번째 자릿수까지
console.log(num4.toPrecision(4)); // 네 번째 자릿수까지
console.log(num4.toPrecision(2));
// 전체 자릿수 표기가 안 될 때는 지수표기법으로 표기됨

console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 이 사이에서 나타낼 수 있는 가장 작은 숫자
}

const num = 0.1 + 0.2 - 0.2; // 0.1이 나와야 함
console.log(num);
// 0.10000000000000003이 나옴 => 우리는 10진수로 계산을 하지만, 자바스크립트에서 계산을 할 때에는
// 2진수로 바꿔서 계산을 한 다음에 결과값을 다시 10진수로 변환을 함
// 000003 같은 이런 작은 오차를 나타내는 것이 EPSILON이라고 보면 됨

function isEqual(original, expected) {
  // return original === expected;
  return Math.abs(original - expected) < Number.EPSILON;
  //아주 미세한 차이가 나더라도 같다고 간주하고 싶다면 이렇게 사용
  // 뺐을 때 마이너스 값이 되지 않도록 절대값을 만들어주는 함수인 Math.abs() 사용
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
// 같은 0.1이지만 false가 뜸. num은 0.10000000000000003 이기 떄문
