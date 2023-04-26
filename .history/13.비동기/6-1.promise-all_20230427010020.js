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
    });
  }, 3000);
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
//
