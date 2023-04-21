// Set : 중복이 허용되지 않는 객체 => 인덱스로 요소에 접근할 수 X
// 안에 이미 같은 값이 존재한다면 추가되지 X
// 중복값을 허용하지 않아야 한다면 Set 이용
// [] 안에 값을 넣어주면 됨

const set = new Set([1, 2, 3]);
// 빈 set을 만들어도 되고
// 배열을 전달해서 기존의 배열의 아이템을 기존으로 해서 set을 만들어볼 수도 있음.
console.log(set); // Set(3) { 1, 2, 3 }

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
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); // 있는 걸 추가하려고 하면 무시됨

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = { name: "🍓", price: 8 };
const obj2 = { name: "🥝", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);
// Set(2) { { name: '🍓', price: 8 }, { name: '🥝', price: 5 } }

// 퀴즈
obj1.price = 10;
console.log(objs);
//Set(2) { { name: '🍓', price: 10 }, { name: '🥝', price: 5 } }
objs.add(obj1);
console.log(objs);
// Set(2) { { name: '🍓', price: 10 }, { name: '🥝', price: 5 } }
// 이미 objs에 obj1이 변경되어서 들어가 있기 때문에 중복된 건 다시 들어가지 않음

// 퀴즈
const obj3 = { name: "🥝", price: 5 };
objs.add(obj3);
console.log(objs);
// Set(3) { { name: '🍓', price: 10 }, { name: '🥝', price: 5 }, { name: '🥝', price: 5 } }
// 객체가 동일해 보이지만 세 개 다 다른 주소를 가지고 있음.
// 새롭게 object 리터럴을 이용해서 만들면 새로운 object임.
