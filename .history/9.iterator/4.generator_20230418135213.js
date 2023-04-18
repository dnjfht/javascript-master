// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

// 제너레이터를 만들기 위해서는 함수로 만들어야 함.
// function 키워드 다음에 *를 붙여줘야 함.
function* multipleGenerator() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    // 원래라면 for문을 돌면서 0부터 9까지 출력을 해야하지만
    // 0만 출력됨.
    yield i ** 2;
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
