// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르륵 펼쳐질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
// console.log(add(nums[0], nums[1], nums[2]));
// 그런데 이 방법보다는,
console.log(add(...nums));
// 이렇게 한 번에 펼쳐주는 방식이 훨씬 간편함.
// 6

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);
// 0, 1인덱스를 제외한 나머지가 나오게 됨

// Array Concat
const fruits1 = ["🍏", "🍓"];
const fruits2 = ["🍑", "🥝"];
let arr = fruits1.concat(fruits2);
console.log(arr);
// [ '🍏', '🍓', '🍑', '🥝' ]
arr = [...fruits1, ...fruits2];
console.log(arr);
