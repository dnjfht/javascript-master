// promise를 사용하면 callback을 전달받지 않음.
function runInDelay(callback, seconds) {}

try {
  runInDelay(() => {
    console.log("타이머 완료");
  }, 2);
} catch (err) {
  console.log(err);
  // error가 발생해도 어플리케이션이 강제 종료되지 않도록
}
