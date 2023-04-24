// 에러를 어떻게 하면 좀 더 우아하게 처리할 수 있는지

function readFile(path) {
  return "파일의 내용";
}

function processFile(path) {
  throw new Error("파일 경로를 찾을 수 없음");
  const content = readFile(path);

  const result = "hi" + content;
  return result;
}

const result = processFile("경로");
console.log(result);
