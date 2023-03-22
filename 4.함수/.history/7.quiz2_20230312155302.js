// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 순회하는 숫자를 다 출력하고 싶음
// 순회하는 숫자의 두 배 값을 다 출력하고 싶음.

let double = (num) => a * 2;

function calculator(num, callback) {
  for (let i = 0; i <= num; i++) {
    let result = action(num);
    console.log(i);
    console.log(result);
    return result;
  }
}

calculator(50, double);
