// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
// const price = item && item.price;
// 이렇게 사용하면 item이 반복이 되는데, 이걸 옵셔널 체이닝 연산자를 이용해서 한 번으로 줄여줌.
const price = item?.price;
// item이 있으면 price에 접근하고 없으면 접근하지 말라는 의미.
console.log(price);

let obj = { name: "🐶", owner: { name: "승민" } };
const name = item?.price;
console.log(name);
