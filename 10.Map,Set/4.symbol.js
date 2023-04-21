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

const key3 = Symbol("key");
const key4 = Symbol("key");
map.set(key3, "Nice to meet you!");
console.log(map.get(key4)); // undefined
console.log(key3 === key4); // false

// Symbol을 사용시 이름은 비록 똑같지만 서로 다른 유일한 키가 생성되는 것을 볼 수 있음.

// 동일한 이름으로 하나의 키를 사용하고 싶다면
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(key1 === key2); // true

console.log(Symbol.keyFor(k1)); // key
// 해당 Symbol의 문자열을 알고 싶다면 Symbol의 keyFore을 이용하면 됨.
