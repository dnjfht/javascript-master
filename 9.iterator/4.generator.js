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
    // yield는 다음 사용하는 사람이 next를 호출할 때까지 기다렸다가
    // 사용자가 next를 호출해야지 그 다음 코드로 실행이 되어서 순회함.
    // 사용하는 사람에게 제어권을 양도함.
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
// 0
// 0 false

// multiple.return();
// return을 하는 순간 제너레이터가 끝나게 됨.
// 다음에 아무리 next를 호출해도 다음 값이 나오지 않고 끝남.
// return() => 나 이제 그만할 거야, 끝내라는 의미.

multiple.throw("Error!");
// throw()를 이용하여 Error를 던진 다음에 next를 호출하면 어플리케이션이 죽음.

next = multiple.next();
console.log(next.value, next.done);
// 1
// 1 false
