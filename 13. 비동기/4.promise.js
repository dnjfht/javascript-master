// promise를 사용하면 callback을 전달받지 않음
function runInDelay(seconds) {
  // 바로 무언가를 수행하는 것이 아니라 promise object를 return함
  // 이 promise를 가지고 있으면 어느 시점에 몇 초가 지나서 timeout이 완료가 되면
  // 성공했는지 실패했는지 알려주겠다!
  return new Promise((resolve, reject) => {
    // 성공한 걸 알려줄, then에 사용할 resolve
    // 실패했을 대 알려줄, catch에 사용할 reject
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음"));
    }
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

runInDelay(3)
  // .then(필요한 일을 수행) => 일이 성공한다면 then 호출
  .then(() => {
    console.log("타이머 완료!");
  })
  // .catch(에러를 처리) => 일이 실패한다면 catch 호출
  .catch((error) => console.error(error))
  // .finally(최종적으로 무조건 호출!) => 성공하든 실패하던 최종적으로 무조건 호출
  .finally(() => console.log("끝났다!"));

// 무조건 성공한 케이스에 대해서만 처리할 거라면 .catch와 .finally는 생략 가능
