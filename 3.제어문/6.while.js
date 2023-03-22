// while(조건) { }
// 조건이 false가 될 때까지 { } 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive === true) {
  console.log("아직 살아있다!");
  if (i === 1000) {
    break;
  }
  i++;
}

do {
  console.log("do-while 아직 살아있다!");
} while (isActive); // 일단 먼저 실행하고 나서 조건을 검사
// 조건이 맞지 않더라도 한 번은 무조건 실행
