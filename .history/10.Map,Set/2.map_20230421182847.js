// Map() => 새 Map 개체를 만듦.
const map = new Map([
  ["key1", "🍓"],
  ["key2", "🍉"],
]);
console.log(map);
// Map(2) { 'key1' => '🍓', 'key2' => '🍉' }

// 사이즈 확인
console.log(map.size); // 2

// 아이템이 존재하는지 확인 => key로 확인해야 함
console.log(map.has("key1")); // true
console.log(map.has("key6")); // false

// 순회
map.forEach((value, key) => {
  return console.log(map.keys());
  // [Map Iterator] { 'key1', 'key2' }

  // console.log(value, key);
  // 🍓 key1;
  // 🍉 key2;
});
console.log(map.values());
// [Map Iterator] { '🍓', '🍉' }
console.log(map.entries());
// [Map Entries] { [ 'key1', '🍓' ], [ 'key2', '🍉' ] }

// 찾기
console.log(map.get("key1")); // 🍓
console.log(map.get("key2")); // 🍉
console.log(map.get("key6")); // undefined

// 추가
map.set("key3", "🍔");
console.log(map);
// Map(3) { 'key1' => '🍓', 'key2' => '🍉', 'key3' => '🍔' }

// 삭제
map.delete("key3");
console.log(map);
// Map(2) { 'key1' => '🍓', 'key2' => '🍉' }

// 전부 삭제
map.clear();
console.log(map);
// Map(0) {}

// map은 무조건 key를 이용하여 추가하고 삭제하고, 찾고 할 수 있음.
// key가 유일한 고유한 아이디이기 때문.

// map과 object와의 큰 차이점?
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는 우유" };
const obj = {
  [key]: milk,
};
console.log(obj);
// { '[object Object]': { name: 'milk', price: 10, description: '맛있는 우유' } }
// key는 object, 값은 milk가 됨

const map2 = new Map([[key, milk]]);
console.log(map2);
// Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는 우유' } }

// map과 object는 상당히 유사함.
// 큰 차이점은 구조상으로는 찾아볼 수 없지만, 사용할 수 있는 함수에 대해서는 조금 다름.
// object에서는 map에서 사용 가능한 함수들을 사용할 수 없음. => 사용할 수 있는 함수가 서로 다름.
