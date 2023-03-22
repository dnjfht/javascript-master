// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 고차함수 calculator를 만듦
// action이라는 callback 함수를 인자로 전달 받음.
// 함수의 레퍼런스만 외부로부터 전달받아서 그 action을 나중에 함수 내부에서 호출.

// 전달된 action은 콜백함수.
// 전달될 당시에 함수를 바로 호출홰서 반환된 값을 전달하는 것이 아니라,
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달됨.
// 그래서 함수는 고차함수(calculator) 안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(60, 40, multiply);
calculator(36, 2, add); // 위에서 선언된 add라는 함수의 참조값을 매개변수로 전달.
