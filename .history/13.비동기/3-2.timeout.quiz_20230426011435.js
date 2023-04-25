// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback, seconds) {
  setInterval(callback, seconds * 1000);
}

runInDelay(() => {
  console.log("타이머 완료!");
}, 2);
