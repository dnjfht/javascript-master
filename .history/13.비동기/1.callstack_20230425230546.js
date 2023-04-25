function a() {
  for (let i = 0; i < 99999999999999999999999999999999999999; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log("시작했다!");
const result = c();
console.log(result); // 3

// 함수 c를 호출하면 함수 b가 호출되고, 함수 b가 호출되면 함수 a가 호출되어서 콜 스택에 저장되는 형태
