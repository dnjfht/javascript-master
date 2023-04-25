// try catch finally - 에러를 어떻게 하면 좀 더 우아하게 처리할 수 있는지
// try catch finally로 잡아주게 되면 더이상 앱이 종료되지 않음.

function readFile(path) {
  throw new Error("파일 경로를 찾을 수 없음");
  // error를 강제로 발생시킬 때 사용하는 것.
  // 이렇게 error를 던지게 되면 밑에 코드는 실행되지 않고 앱이 종료되게 됨.
  // but, 파일을 못 읽었다고 해서 앱이 종료되는 것은 좋지 못한 사용 experience임.
  return "파일의 내용";
}

function processFile(path) {
  // const content = readFile(path);
  // 바로 호출하면 앱이 종료가 될 수 있음.
  let content;
  try {
    content = readFile(path);
    // 함수를 호출하는 부분을 try 내에서 해줘야 함.
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    // 어떤 경로를 통해서 여기까지 와닿았는지
    content = "기본내용";
    // error가 뜰시 content에 "기본내용"이 들어간 상태로 함수가 실행되도록 => hi기본내용
  } finally {
    console.log("성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!");
  }

  const result = "hi" + content;
  return result;
}

const result = processFile("경로");
console.log(result);
