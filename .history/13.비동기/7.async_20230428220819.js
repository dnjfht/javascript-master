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

// 함수 앞에 async를 붙이면 비동기처럼 작동을 하는데
// 즉 이 함수를 호출하면 promise가 return이 되는데
// 함수 내부에서는 조금 더 동기적인 코드를 작성할 수 있음.

async function fetchFruits() {
  const banana = await getBanana();
  // 바나나를 가져올 때까지 기다림.
  const apple = await getApple();
  // 사과를 가져올 때까지 기다림.
  // 그냥 return하면 promise가 있기 때문에 await를 사용해야 함.

  return getBanana() //
    .then((banana) =>
      getApple() //
        .then((apple) => [banana, apple])
    );
}

fetchFruits().then((fruitsArr) => console.log(fruitsArr));
