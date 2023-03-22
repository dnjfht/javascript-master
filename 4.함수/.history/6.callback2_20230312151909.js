// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 고차함수 calculator를 만듦
// action이라는 callback 함수를 인자로 전달 받음.
// 함수의 레퍼런스만 외부로부터 전달받아서 그 action을 나중에 함수 내부에서 호출.
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(10, 24, multiply);
calculator(36, 2, add); // 위에서 선언된 add라는 함수의 참조값을 매개변수로 전달.
