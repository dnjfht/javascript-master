// Bubbling up, Propagating🧼
// error가 전파되는!!

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
