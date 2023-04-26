// async - 동기적인 코드처럼 보이지만 비동기적인 코드를 작성할 수 있는.

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
    }, 1000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

// 바나나와 사과를 함께 가지고 오기
function fetchFruits() {
  return getBanana() //
    .then((banana) =>
      getApple() //
        .then((apple) => [banana, apple])
    );
}
