// promise를 사용하면 callback을 전달받지 않음.
function runInDelay(seconds) {
  // runInDelay 함수를 호출시 즉각적으로 promise를 리턴.
  // 이 promise 객체를 통해서 어느 시점에 timeout이 완료가 되면 성공적으로 끝났는지, 실패했는지 알려주겠다!
  return new Promise();
}

// promise가 끝이 나면, 성공적으로 된다면 .then을 이용하여 필요한 일을 수행하면 됨.
// error가 발생했다면 catch를 통해서 error를 잡을 수 있음.
// 최종적으로 무언가를 해야 한다면 finally에서 필요한 일을 수행하면 됨.
runInDelay(2)
  .then(() => {
    console.log("타이머 완료");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("끝났다!");
  });
