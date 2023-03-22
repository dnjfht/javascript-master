// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = "Hello World!";
// H
// e
// l
// l
// ..
// !

// console.log(text.slice(0, 1)); // H
// console.log(text.slice(1, 2)); // e
// console.log(text.slice(2, 3)); // l
// console.log(text.slice(3, 4)); // l
// console.log(text.slice(4, 5)); // o
// console.log(text.slice(5, 6)); // " "
// console.log(text.slice(6, 7)); // W
// console.log(text.slice(7, 8)); // o
// console.log(text.slice(8, 9)); // r
// console.log(text.slice(9, 10)); // l
// console.log(text.slice(10, 11)); // d
// console.log(text.slice(11, 12)); // !

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용자들이 id를 잘라내야 각각의 id를 배열로 보관
const ids = "user1, user2, user3, user4";
// ['user1', 'user2', 'user3', 'user4'];

const array = ids.split(","); // ,를 기준으로 끊어내어 배열에 담아주기
console.log(array);

// 3. 1초에 한 번씩 시계를 (날짜포함) 출력해보자
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString("ko-KR"));
}, 1000);
