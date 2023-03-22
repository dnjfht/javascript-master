// 반복문 Loop Statement
// 랙(변수선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프
//for(;;) {
//
//}
// 조건은 항상 거짓이 될 수 있도록

// 반복문 제어 : continue, break;
console.clear();

for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // continue가 나오면 그 아래 어떤 코드가 있더라도 무시가 되고 바로 그 다음으로 증액을 하고 넘어감
    console.log("i가 드디어 10이 되었다");
    break; // i가 10이 됐을 때 for문을 종료하고 싶음
  }
  console.log(i);
}
