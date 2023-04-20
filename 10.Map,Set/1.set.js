// Set : 중복이 허용되지 않는 객체 => 인덱스로 요소에 접근할 수 X
// 안에 이미 같은 값이 존재한다면 추가되지 X
// 중복값을 허용하지 않아야 한다면 Set 이용
// [] 안에 값을 넣어주면 됨

const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size); // 3

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item)); // 1,2,3을 하나씩 꺼냄
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
