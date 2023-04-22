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

// if문 안에서 쓸 때는 true인지 false인지 평가를 해야 하기 때문에 모든 값들이 boolean으로 평가가 되어서 true인지 false인지 확인을 했다면
// 조건문 밖에서 쓴다면 obj1이 true이기 때문에 나머지 obj2는 굳이 true나 false로 평가하지 않아도 됨. 그래서 평가가 단축됨.
// 그래서 평가하는 대신에, 나머지 값을 할당할 거임.
