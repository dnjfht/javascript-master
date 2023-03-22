// 퀴즈 1 : 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ["🍌", "🍓", "🍇", "🍓"]
// output : [ '🍌', '🥝', '🍇', '🥝' ]

// [1]
const fruits = ["🍌", "🍓", "🍇", "🍓"];
let result = fruits.map((fruit) => {
  if (fruit === "🍓") {
    return (fruit = "🥝");
  } else {
    return fruit;
  }
});
console.log(fruits);
// [ '🍌', '🍓', '🍇', '🍓' ]
console.log(result);
// [ '🍌', '🥝', '🍇', '🥝' ]

// [2]
function replace(fruits, from, to) {
  return fruits.map((fruit) => {
    if (fruit === from) {
      return (fruit = to);
    } else {
      return fruit;
    }
    // if문 대신 삼항연산자를 사용해도 됨.
    // (fruit === from ? fruit = to : fruit);
  });
}

result = replace(fruits, "🍓", "🥝");
console.log(fruits);
console.log(result);

// 퀴즈 2 :
// 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개나 있는지 카운트하는 함수 만들기
// input : [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output : 2

// function counter(fruits, item) {
//   return fruits.filter((fruit) => fruit === item).length;
// }

function counter(fruits, item) {
  return fruits.filter((value) => value === item).reduce((count) => count++, 0);
}

const fruits2 = ["🍌", "🥝", "🍇", "🥝"];
result = counter(fruits2, "🥝");
console.log(result);

// 퀴즈 3 : 배열1, 배열2 두 개의 배열을 전달 받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : [ '🍌', '🥝', '🍇' ], [ '🍌', '🍓', '🍇', '🍓' ]
// output : [ '🍌', '🍇' ]

function match(fruits1, fruits2) {
  return fruits1.filter((fruit) => fruits2.includes(fruit));
}
const array1 = ["🍌", "🥝", "🍇"];
const array2 = ["🍌", "🍓", "🍇", "🍓"];
result = match(array1, array2);
console.log(array1, array2);
// [ '🍌', '🥝', '🍇' ] [ '🍌', '🍓', '🍇', '🍓' ]
console.log(result);
// [ '🍌', '🍇' ]

// 퀴즈 4
// 5 이상(보다 큰)의 숫자들의 평균

function avg(nums) {
  return nums
    .filter((num) => num >= 5)
    .reduce((avg, num, _, array) => avg + num / array.length, 0);
}

const nums = [3, 16, 5, 25, 4, 34, 21];
result = avg(nums);
console.log(nums);
// [ 3, 16,  5, 25, 4, 34, 21 ]
console.log(result);
// 20.2
