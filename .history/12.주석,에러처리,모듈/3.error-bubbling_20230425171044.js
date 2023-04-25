// Bubbling up, Propagating🧼
// error가 전파되는!!
// error는 최종적으로 호출한 사람에게까지 전파됨.
// 그래서 최종적으로 error를 catch할 수 있음.

function a() {
  throw new Error("error!");
}

function b() {
  a();

  //   try {
  //     a();
  //   } catch (err) {
  //     console.log("Catched!");
  //     // 최대한 근접한 곳에서 error catch해줘도 됨.
  //   }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!");
  // error는 전파가 되기 때문에 최종적으로 error를 catch해줘도 되고
  // 위에서 error를 catch해줘도 됨.
}
console.log("done!");
