// 일급함수(first-class function) - 함수가 일반 객체처럼 모든 연산이 가능한 것
// 함수의 매개변수로 전달
// 함수의 반환값
// 할당 명령문
// 동일 비교 대상

// 고차함수(Higher-order function)
// 인자로 함수를 받거나(콜백함수)
// 함수를 반환하는 함수를 고차함수

// 배열에서도 사용할 수 있는 유용한 고차함수들이 많음!!
// 함수형 프로그래밍 => 서로 특정한 일을 하는 함수들끼리 엮어놓는 것
// 함수형 프로그래밍을 해나가기 위해서는 함수 자체를 순수함수로 만드는 것이 중요 => 함수 안에서 불변성을 유지
// 순수함수로 만듦으로써 에러는 줄이고 가독성은 높일 수 있음
// 함수형 프로그래밍 사용 => 데이터 변경 X, 변수 사용 X, 조건문 X, 반복문 X

const fruits = ["🍌", "🍓", "🍇", "🍓"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 원하는 것(콜백함수)을 할때
// 배열에 있는 forEach 함수 => 인자로 callback 함수를 받음 => callback 함수의 인자로는 value, index, array를 받음.
fruits.forEach(function (value, index, array) {
  console.log("----------------------------");
  console.log(value); // value만 사용할 거라면 나머지 인자들은 생략이 가능
  console.log(index);
  console.log(array);
});

fruits.forEach((value) => console.log(value));
// 🍌
// 🍓
// 🍇
// 🍓

// 조건에 맞는(콜백함수) 아이템을 찾을 때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "🥛", price: 2 };
const item2 = { name: "🍪", price: 3 };
const item3 = { name: "🍙", price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "🍪");
console.log(result);
// { name: '🍪', price: 3 }
console.log(products);
// [
//  { name: '🥛', price: 2 },
//  { name: '🍪', price: 3 },
//  { name: '🍙', price: 1 },
//  { name: '🍪', price: 3 }
//

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === "🍪");
console.log(result);
// 1

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === "🍪");
// 배열 이름이 하나라도 쿠키면 true가 나오도록
console.log(result);
// true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === "🍪");
// 배열 이름이 전체가 쿠키면 true가 나오도록
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === "🍪");
console.log(result);

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap : 중
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result); // 글자들이 한 줄로 분리되어 쫙 펴짐

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기준의 배열을 변경
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ] => error : 10은 앞에 1이 있어 1 다음에 나오게 됨
// < 0 : a가 앞으로 정렬, 오름차순
// > 0 : b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
// 앞 - 뒤를 했을 때 마이너스가 되어야만 함 => 10이 1 뒤에 올 수도, 2 앞에 올 수도 없음
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
// result = [1,2,3,4,5].reduce((sum,value) =>
// {
//  sum += value;
//  return sum;
// }, 0);
// 0과 같이 처음에 시작할 값을 넣어줄 수 있음
console.log(result); // 15
