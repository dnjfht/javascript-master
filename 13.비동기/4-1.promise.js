// promise를 사용하면 callback을 전달받지 않음.
function runInDelay(seconds) {
  // runInDelay 함수를 호출시 즉각적으로 promise를 리턴.
  // 이 promise 객체를 통해서 어느 시점에 timeout이 완료가 되면 성공적으로 끝났는지, 실패했는지 알려주겠다!
  // promise를 만들 때 두 가지 인자를 전달받아서 무언가를 처리하는 callback 함수를 전달해야 함.
  // 우리는 성공했을 때 then에서 사용할 resolve와 실패한 걸 알려줄 reject를 인자로 받을 거임.
  // promise 안에서 비동기적인 일을 수행할 거임.
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject();
    }
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
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
