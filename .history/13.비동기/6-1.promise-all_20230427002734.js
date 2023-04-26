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
