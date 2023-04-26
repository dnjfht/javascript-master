// 나머지 promise static 함수들 알아보기

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

// 바나나와 사과를 함께 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then((result) => console.log(result));

// 순차적으로 진행을 하면 바나나를 가지고 오는데 1초, 사과를 가지고 오는데 3초, 총 4초가 걸림.
// promise를 하나 하고 다음껄 실행하면 시간이 오래 걸릴 수 있기 때문에 병렬적으로 실행하는 방법이 있음.
// Promise.all 병렬적으로 한 번에 모든 Promise들을 실행!

Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

// 병렬적으로 동시에 시작해서 총 3초 후에 바로 실행이 됨

// Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(() => console.log("error!"));

// all 중에 error가 발생하는 코드가 있다면 당연히 catch를 해줘야 함.
