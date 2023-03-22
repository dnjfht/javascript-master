// Object literal { key : value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: "apple",
  "hello-bye": "👋",
  0: 1,
  ["hello-bye1"]: "👋",
};

// 속성, 데이터에 전급하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple["hello-bye"]);
console.log(apple["hello-bye1"]); // 대괄호 표기법 bracket notation
// 이런식으로 '' 데쉬가 들어있는 것은 .으로는 접근이 불가능
console.log(apple["name"]);

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;
console.log(apple);
