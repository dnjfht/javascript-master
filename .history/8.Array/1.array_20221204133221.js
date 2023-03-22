// 배열 생성 방법
let array = new Array(2); // 2개의 비어있는 아이템이 생김
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2); // static 함수 => 요소들의 집합으로부터 새로운 배열을 반환
console.log(array);

const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

array = Array.from(anotherArray); // anotherArray 변수를 복사해서 그대로 반환해줌
console.log(array);
// from은 새로운 array를 만드는데 iterable object로부터 iterable을 전달 받음
// iterable은 순회가 가능한 모든 것을 전달할 수 있음
array = Array.from("TEXT"); // ['T','E','X','T']
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함!
// 자바스크립트에서의 배열은 일반적인 배열의 동작을 흉내넨 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
array = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
console.log(array); // [ '안','녕 ]
