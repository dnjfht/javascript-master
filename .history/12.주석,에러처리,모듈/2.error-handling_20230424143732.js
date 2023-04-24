// 에러를 어떻게 하면 좀 더 우아하게 처리할 수 있는지

function readFile(path) {
  throw new Error("파일 경로를 찾을 수 없음");
  // error를 강제로 발생시킬 때 사용하는 것.
  // 이렇게 error를 던지게 되면 밑에 코드는 실행되지 않고 앱이 종료되게 됨.
  // but, 파일을 못 읽었다고 해서 앱이 종료되는 것은 좋지 못한 사용 experience임.
  return "파일의 내용";
}

function processFile(path) {
  const content = readFile(path);

  const result = "hi" + content;
  return result;
}

const result = processFile("경로");
console.log(result);
