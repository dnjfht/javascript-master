// Bubbling up, Propagating🧼
// error가 전파되는!!
// error는 최종적으로 호출한 사람에게까지 전파됨.
// 그래서 최종적으로 error를 catch할 수 있음.

function a() {
  throw new Error("error!");
}

function b() {
  try {
    a();
  } catch (err) {
    // console.log("Catch!");
    // 최대한 근접한 곳에서 error catch해줘도 됨.
    // 근접한 곳에서 error를 잡아주게 되면 밑에서 error가 catch된 것은 출력되지 않음.

    console.log("생각해보니 이 error는 내가 핸들링할 수 없을 것 같군!");
    throw err;
    // 근접한 곳에서 error를 잡을 수 없을 것 같다면 error를 다시 던지면 됨.
  }
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
