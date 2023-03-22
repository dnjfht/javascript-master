// 퀴즈 1 : 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ["🍌", "🍓", "🍇", "🍓"]
// output : [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array) {
  const replaced = Array.from(array);

  for (let i = 0; i <= replaced.length - 1; i++) {
    if (replaced[i] === "🍓") {
      replaced[i] = "🥝";
    }
  }
  return replaced;
}

const array = ["🍌", "🍓", "🍇", "🍓"];
let result = replace(array);
console.log(array);
// ["🍌", "🍓", "🍇", "🍓"]
console.log(result);
// [ "🍌", "🥝", "🍇", "🥝" ]

// 퀴즈 2 :
// 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개나 있는지 카운트하는 함수 만들기
// input : [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output : 2

function counter(array2, fruit) {
  let count = 0;

  for (let i = 0; i <= array2.length - 1; i++) {
    if (array2[i] === fruit) {
      count += 1;
    }
  }
  return count;
}

const array2 = ["🍌", "🥝", "🍇", "🥝"];
result = counter(array2, "🥝");
console.log(array2);
// [ '🍌', '🥝', '🍇', '🥝' ]
console.log(result);
// 2

// 퀴즈 3 : 배열1, 배열2 두 개의 배열을 전달 받아,
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : [ '🍌', '🥝', '🍇' ], [ '🍌', '🍓', '🍇', '🍓' ]
// output : [ '🍌', '🍇' ]
