// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 고차함수 calculator를 만듦
// action이라는 callback 함수를 인자로 전달 받음.
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}
