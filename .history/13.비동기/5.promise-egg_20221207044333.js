function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
  // 이렇게 하면 즉각적으로 resolve 시킬 수 있음
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
  // return Promise.resolve(`🎍 => 🥚`);
}

// fetchEgg("🐔") //
//   .then((egg) => console.log(egg));

getChicken()
  .catch(
    () => "🐔"
    // error가 발생했을 때 적절한 처리를 어떻게, 어디에서 해주냐에 따라서 값이 달라짐
    // 체이닝 안에서도 적절하게 처리해주고 대체할 값을 리턴해주면 전체적인 체이닝이 실패하지 않음
    // 중간중간 error가 발생하면 catch로 error를 잡아주고 적절한 처리를 해준 후 해당하는 값을 리턴해주면 됨
  )
  .then(fetchEgg) // 전달하는 인자와 호출하는 인자가 동일하면 함수 이름만 적으면 됨(나머지 생략 가능)
  .then(fryEgg)
  .then(console.log);
//🎍 => 🥚 => 🥚 => 🍳 출력

// .then((chicken)=>{return fetchEgg(chicken);})           =>
// .then((chicken)=>fetching(ckicken))           =>
// .then(fetching)             => 전달하는 인자와 호출하는 인자가 동일하면 생략하고 함수만 적어주면 됨

// .catch((error) => '🐔')           =>
// .catch () => '🐔')           => 인자가 필요없다면 인자도 생략 가능
