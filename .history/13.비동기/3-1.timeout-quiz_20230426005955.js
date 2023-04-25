// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback 함수가 없습니다!");
  }
  if (!seconds && seconds < 0) {
    throw new Error("초가 0초 미만입니다!");
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("seconds 초가 지나면 callback 함수를 호출함!");
  }, 2);
} catch (err) {
  console.log(err);
}
