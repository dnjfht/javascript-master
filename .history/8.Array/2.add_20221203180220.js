const fruits = ["🍌", "🍎", "🍇", "🍑"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// const fruits = ["🍌", "🍎", "🍇", "🍑"];
// 추가, 삭제 - 좋지 않은 방식
fruits[3] = "🍓"; // index로 바로 접근하는 것은 좋지 않음
console.log(fruits);

fruits[fruits.length] = "🍓";
// index.length로 추가하게 되면 맨 마지막에 넣을 수 있지만 역시 좋은 방식이 아님
console.log(fruits);

delete fruits[1];
console.log(fruits);
// 이렇게 비우게 되면 그 자리가 empty item으로 비어있게 됨
