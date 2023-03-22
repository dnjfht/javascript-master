function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add;
// sum이라는 새로운 변수가 add가 가리키고 있는 레퍼런스를 똑같이 가리킴
// sum과 add는 동일한 함수 정의를 가짐

// console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum());
