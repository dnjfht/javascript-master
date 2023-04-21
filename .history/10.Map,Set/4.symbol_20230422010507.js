// Symbol 심벌
// 유일한 키를 생성할 수 있음

const map = new Map();
const key1 = "key";
const key2 = "key";
map.set(key1, "Hello");
console.log(map.get(key2)); // Hello
// 문자열이 똑같은 값이니까 key1을 넣어도 key2로 동일한 "Hello"를 가지고 나올 수 있음.
// 원시 타입이라 값이 똑같아서 동일한 key라고 간주할 수 있는 것.
console.log(key1 === key2); // true
