// 주어진 secondes(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback 함수를 전달해야 함");
  }
  if (!seconds || seconds < 0) {
    throw new Error("seconds는 0보다 커야함");
  }

  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("타이머 완료");
  });
} catch (error) {
  // error가 발생해도 어플리케이션이 강제 종료되지 않도록
}
