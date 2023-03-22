function sum(a, b) {
  console.log("function");
  return a + b;
}

// console.log(add(100, 200));
const result = sum(100, 200);
console.log(result);

// 사용예제2
// 새로운 사용자가 생길 때마다 이렇게 변수를 만들기는 번거로우므로 함수로 만들어줌.

let lastName = "김";
let firstName = "지수";
let fullName = `${lastName} ${firstName}`;
console.log(fullName);

function fullName2(firstName2, lastName2) {
  return `${firstName2} ${lastName2}`;
}

console.log(fullName2("유", "승민"));
