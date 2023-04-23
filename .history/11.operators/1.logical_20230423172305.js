// 논리연산자 Logical Operator
// && 그리고
// || 또는

// 단축평가 : short-circuit evaluation
// 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것.

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
// => if문 안이나 boolean 타입으로 평가해야 하는 경우가 아니라, 단순히 변수에 값을 할당하는 경우는 평가가 생략됨.
// 그래서 평가하는 대신에, 나머지 값을 할당할 거임.

result = obj1 || obj2;
console.log(result);
// { name: '🐶' }

// obj1이 true니까 뒤에껀 확인해볼 필요 없이 앞에 obj1을 할당해주는 것.

// 활용예
// 조건이 truthy일 때, && 무언가를 해야 할 경우
// 조건이 falshy일 때, || 무언가를 해야 할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어요!");
  }
  animal.owner = "바뀐 주인!";
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어요!");
  }
  animal.owner = "새로운 주인!";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
// obj1.owner가 falshy였기 때문에 changeOwner(obj1)가 실행되지 않음.
// { name: '🐶' }

console.log(obj2);
// obj2.owner가 truthy였기 때문에 changeOwner(obj2)가 실행됨.
// { name: '🐱', owner: '바뀐 주인!' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
// obj1.owner가 falshy였기 때문에 changeOwner(obj1)가 실행되지 않음.
// { name: '🐶' }

console.log(obj2);
// obj2.owner가 truthy였기 때문에 changeOwner(obj2)가 실행됨.
// { name: '🐱', owner: '바뀐 주인!' }
