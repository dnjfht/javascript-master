// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ["🍓", "🍑", "🍉", "🍒"];
const [first, second, ...others] = fruits;
console.log(fruits[0]);
// 🍓
console.log(first); // 🍓
console.log(second); // 🍑
console.log(others); // [ '🍉', '🍒' ]

const point = [1, 2];
const [x, y] = point;
console.log(y); // 2
console.log(x);
