// 자바스크립트에 내장되어있는 배열 메서드를 iteration methods(또는 iterator,반복자)라 함
// 대표적인 반복자로는  .forEach() .map() .filter() .findIndex() 등이 있음
// Iterable 하다는 건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread를 사용 가능

let array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const array2 = [1, 2, 3];
for (const item of array2.values()) {
  // 배열 안에 values들을 전부 출력
  console.log(item);
}

const array3 = [1, 2, 3];
for (const item of array3.keys()) {
  // 배열 안에 key들을 전부 출력
  console.log(item);
}

const array4 = [1, 2, 3];
for (const item of array4.entries()) {
  // 배열 안에 key : value 형식을 모두 출력
  console.log(item);
}

const iterator = array.values();
for (const item of iterator) {
  console.log(item);
} // 1 2 3 출력

const iterator2 = array.values();
console.log(iterator2.next());
// { value: 1, done: false }가 출력 => value라는 key에는 실질 값이,
// done에는 반복문이 끝났는지 안 끝났는지 가장 마지막 아이템인지 아닌지를 나타냄

const iterator3 = array.values();
console.log(iterator3.next().value); // 값만 출력하고 싶다면 .value를 붙여주면 됨
console.log(iterator3.next().value);
console.log(iterator3.next().value);
console.log(iterator3.next().value); // 이미 다 출력되었으므로 마지막에 undefined가 뜸

// ▼▼▼▼

const iterator4 = array.values();
while (true) {
  const item = iterator4.next();
  if (item.done) break;
  console.log(item.value);
}

// const obj = { 0: 1, 1: 2};
// for (const item of obj) {
//  console.log(item);
// }
// object(객체)는 iterable이 아니다 => 오류

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item);
}
// 대신 object(객체)는 for - in을 사용할 수 있음 => key를 출력
