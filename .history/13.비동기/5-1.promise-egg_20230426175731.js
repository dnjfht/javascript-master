function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
// 네트워크 통신을 하는 것처럼 처리를 해보자!
// promise를 조금 더 심플하게 만들 수 있음.
// static 함수를 이용해서 resolve를 호출하면 promise를 만들고나서 즉각적으로 resolve 시킬 수 있음.
