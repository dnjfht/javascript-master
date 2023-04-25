// Bubbling up, Propagating🧼
// error가 전파되는!!
// error는 최종적으로 호출한 사람에게까지 전파됨.

function a() {
  throw new Error("error!");
}

function b() {
  a();
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!");
}
