// 퀴즈!
let num = 1;
// num의 숫자가 짝수이면 👍, 홀수이면 👎을 출력하도록
// if
// 삼항연산자

// if문

if (num % 2 === 0) {
  console.log("👍");
} else if (num % 2 === 1) {
  console.log("👎");
}

// 삼항연산자

const appraise = num % 2 ? "👎" : "👍";
console.log(appraise);
