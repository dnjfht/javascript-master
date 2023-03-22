// 얕은 복사 Shallow Copy - 객체 는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
// function (obj) {
// 인자로 전달된 object가 있다면 그것을 함수 내부에서 수정하는 것은 위험함
// 왜냐하면 기존의 object까지 수정되기 때문임
// }

const pizza = { name: "🍕", price: 2 };
const ramen = { name: "🍜", price: 3 };
const sushi = { name: "🍣", price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log(store1);
console.log(store2);
// [ { name: '🍕', price: 2 }, { name: '🍜', price: 3 } ]
