// Set : 중복이 허용되지 않는 객체 => 인덱스로 요소에 접근할 수 X
// 안에 이미 같은 값이 존재한다면 추가되지 X
// 중복값을 허용하지 않아야 한다면 Set 이용
// [] 안에 값을 넣어주면 됨

const set = new Set([1, 2, 3]);
// 빈 set을 만들어도 되고
// 배열을 전달해서 기존의 배열의 아이템을 기존으로 해서 set을 만들어볼 수도 있음.
console.log(set);
// Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); // 3

// 아이템이 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));
// 1
// 2
// 3

for (const value of set.values()) {
  console.log(value);
  // 1
  // 2
  // 3
}

// 추가
set.add(6);
console.log(set);
// Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set);
