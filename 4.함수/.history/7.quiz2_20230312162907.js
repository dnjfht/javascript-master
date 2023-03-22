// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 순회하는 숫자를 다 출력하고 싶음
// 순회하는 숫자의 두 배 값을 다 출력하고 싶음.

// let print = (max) => {
//   for (let i = 0; i <= max; i++) {
//     console.log(i);
//   }
// };

// let double = (max) => {
//   for (let i = 0; i <= max; i++) {
//     console.log(i * 2);
//   }
// };

// function iterator(max, action) {
//   action(max);
// }

let print = (max) => max;

let double = (max) => max * 2;

function iterator(max, action) {
  for (let i = 0; i <= max; i++) {
    let result = action(i);
    console.log(result);
  }
}

iterator(50, double);
iterator(50, print);

// let double = (max) => max * 2;

// function iterator(max, action) {
//   for (let i = 0; i <= max; i++) {
//     console.log(i);
//     let result = action(i);
//     console.log(result);
//   }
// }

// iterator(50, double);

setTimeout(() => {
  console.log("1초 뒤 이 함수가 실행될 거예요");
}, 1000);
