// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 2
function add(a = 1, b = 2) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}

console.log(add(2, 2));

// Rest 매개변수 Rest Parameters
// 얼마나 많은 갯수의 인자가 전달될지 모를때 ...numbers
// 첫 번째와 두 번째는 a와 b로 받고 나머지는 numbers라는 배열로 받겠다는 뜻
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
