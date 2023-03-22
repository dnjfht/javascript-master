function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

// 1 -> 3 -> 2 순서대로 호출됨
// setTimeout이 node 보고 3초 뒤에 나에게 콜백함수를 알려줘라고 말한 뒤 던져만 두고 넘어감

execute();
