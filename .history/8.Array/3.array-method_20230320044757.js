// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열은 반환하는지
const fruits = ["🍌", "🍎", "🍇"];

// 특정한 오브젝트가 배열인지 체크하는 static 함수 isArray
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위치를 찾을 때 만들어진 배열의 인스턴스 레벨의 indexOf 함수 사용
console.log(fruits.indexOf("🍎"));

// 배열 안에 특정한 아이템이 있는지 없는지 체크
console.log(fruits.includes("🍎")); // true
console.log(fruits.includes("1")); // false

// 추가 - 제일 뒤
// 새로운 요소를 배열 끝에 추가한 후에 배열의 길이를 return해줌.
let length = fruits.push("🍉");
// 배열 자체를 수정(업데이트) => 가장 마지막에 인덱스를 추가하여 수박 넣기
console.log(fruits);
console.log(length);
// 변수는 배열의 갯수를 리턴함
// 4

// 추가 - 제일 앞
length = fruits.unshift("🍰");
// 배열 자체를 수정(업데이트)

console.log(fruits);
console.log("length", length);
// 5

length = fruits.unshift("🍜", "🍣");
console.log(fruits);
console.log(length);
// 7

// 제거 - 제일 뒤
let lastItem = fruits.pop(4); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);
// 변수는 제거된 아이템을 리턴해줌

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);
// 변수는 맨 앞에서 제거된 아이템을 리턴해줌

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 1부터 시작해서 하나를 삭제
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted); // 변수는 제거된 아이템을 리턴해줌
fruits.splice(1, 0, "🍗"); // 아무것도 삭제하지 않고 1번째 자리에 "🍗"를 추가
console.log(fruits); // 첫 번째 자리에 "🍗"가 추가된 것을 볼 수 있음
// 배열 자체를 수정(업데이트)

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr);
// 기존에 배열을 유지한 상태로 잘라진 새로운 배열을 리턴 => 0부터 2 전까지 잘라진 것들을 출력
console.log(fruits); // 기존에 것에서 바뀐 것이 없음
newArr = fruits.slice(); // 아무것도 지정해주지 않으면 전체가 반환됨
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1); // 맨 뒤에서 한 칸 앞 당긴 것만 잘라내서 반환함
console.log(newArr);
console.log(fruits);

// 여러 개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();

// 중첩 배열을 하나씩 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
// 1단계까지 중첩된 것을 풀어주기 때문에
// 2단계까지 중첩된 것을 풀어주고 싶다면 ()안에 2를 넣어줘야 함
console.log(arr.flat(3));
arr = arr.flat(3);
// 3단계까지 중첩된 것을 풀어줌

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정 => 0으로 배열을 다 채워줌
console.log(arr);

arr.fill("s", 1, 3); // 's'로 1부터 3 전까지 채우기
console.log(arr);

arr.fill("n", 1); // 'n'로 1부터 전체 다 채우기
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,n,n,n,n,n,n,n

text = arr.join("|"); // 콤마 말고 다른 식으로 문자열로 합하고 싶다면
console.log(text); // 0|n|n|n|n|n|n|n
