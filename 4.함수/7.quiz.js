// 주어진 숫자 만큼 0부터 순회하는 함수
// 수행하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max,action)
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}

// iterate(3, log);
iterate(3, (num) => console.log(num));
//iterate(3, doubleAndLog);
iterate(3, (num) => console.log(num * 2));

// setTimeout(callback, 1000);
setTimeout(() => {
  console.log("1초 뒤 이 함수가 실행될 거예요");
}, 1000);
