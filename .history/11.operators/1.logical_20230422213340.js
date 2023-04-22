// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가 : short-circuit evaluation

const obj1 = { name: "🐶" };
const obj2 = { name: "🐱", owner: "Seungmin" };

// if문 안에서 논리연산자를 사용하면 각각의 조건들이 값으로 평가가 되는데, boolean으로 변환되어 평가되게 됨.
if (obj1 && obj2) {
  console.log("둘 다 true!");
}

let result = obj1 && obj2;
console.log(result);
// { name: '🐱', owner: 'Seungmin' }
