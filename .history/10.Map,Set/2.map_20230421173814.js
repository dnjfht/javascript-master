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
  return console.log(value, key);
  //🍓 key1
  // 🍉 key2
});

// 찾기

// 추가

// 삭제

// 전부 삭제
