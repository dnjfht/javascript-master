// 주어진 배열에서 중복을 제거 하라
// 1. set 이용해보기
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']
const set = new Set(fruits);
console.log(set);
// Set(4) { '🍌', '🍎', '🍇', '🍑' }

// 1.1 set 이용해보기(구글검색) - spread 연산자는 value만 쏙쏙 빼온다
const setGoogle = new Set(fruits);
const newArr = [...setGoogle];
console.log(newArr);
// [ '🍌', '🍎', '🍇', '🍑' ]

// 1.2 array.from 이용해보기(구글검색)
const setGoogle2 = Array.from(new Set(fruits));
console.log(setGoogle2);
// [ '🍌', '🍎', '🍇', '🍑' ]

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const set3 = new Set();

for (const num of set1) {
  if (set2.has(num)) {
    set3.add(num);
  }
}
console.log(set3);
// Set(3) { 1, 2, 3 }
