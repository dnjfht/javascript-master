// 얕은 복사 Shallow Copy - 객체 는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
// function (obj) {
// 인자로 전달된 object가 있다면 그것을 함수 내부에서 수정하는 것은 위험함
// 왜냐하면 기존의 object까지 수정되기 때문임
// }

const pizza = { name: "🍕", price: 2, owner: { name: "Ellie" } };
const ramen = { name: "🍲", price: 3 };
const sushi = { name: "🍣", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log("store1", store1);
console.log("store2", store2);

store2.push(sushi);
console.log("store1", store1);
console.log("store2", store2);
// 서로 다른 배열 객체를 가지고 있어 store1, store2 둘 다 각각 새로 만들어진 배열을 가리킴
// 서로 다른 배열이기 때문에 store2에만 sushi를 추가하면 store1에는 영향이 가지 않음

pizza.price = 4;
console.log("store1", store1);
console.log("store2", store2);

// store1을 만들 때 pizze, ramen 배열의 주소를 복사해오는 것
// 동일한 오브젝트를 가지고 있기 때문에 오브젝트를 수정한다면 store1과 stroe2도 같이 수정됨
