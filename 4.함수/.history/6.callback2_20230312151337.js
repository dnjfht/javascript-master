// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 고차함수 calculator를 만듦
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
}
