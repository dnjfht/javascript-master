// promise 체이닝 =>
// 비동기 함수의 처리 결과를 가지고 다른 비동기 함수를 호출하는 경우 함수의 호출이 중첩되어 복잡도가 높아진다.
// 이에 따라 프로미스는 후속 처리 메서드를 체이닝 하여 여러 개의 프로미스를 연결하여 사용할 수 있다.

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
  //return Promise.resolve(`🌱 => 🐓 `);
}
// 네트워크 통신을 하는 것처럼 처리를 해보자!
// promise를 조금 더 심플하게 만들 수 있음.
// static 함수를 이용해서 resolve를 호출하면 promise를 만들고나서 즉각적으로 resolve 시킬 수 있음.

getChicken() //
  .catch((error) => {
    console.log(error.name);
    return "🐔";
  })
  .then((chicken) => fetchEgg(chicken))

  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

// 여러 가지 promise가 체이닝이 된 경우라면
// cathc를 어디서 해주냐에 따라서 결과가 좀 다름.
// catch를 맨 아래에 두면 에러가 버블링되어서 최종적으로 에러가 잡히게 되는데
// catch를 위로 올려주게 되면 getChicken을 해서 치킨을 가져왔을 때 실패하면 error를,
// 성공하면 다른 무언가를 return할 수 있음.
