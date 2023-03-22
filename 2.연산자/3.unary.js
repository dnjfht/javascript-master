// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)
let a = 5;
a = -a; // -1 * 5
console.log(a); // -5
a = -a;
console.log(a); // 5
a = +a;
console.log(a); // 5

a = -a; // -5
a = +a; // -5
console.log(a);

let boolean = true;
console.log(boolean); //true
console.log(!boolean); // false
console.log(!!boolean); // true

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); // false를 숫자로 전환하면 0이 나옴
console.log(+null); // null을 숫자로 전환하면 0이 나옴
console.log(+""); // 문자형을 숫자로 전환하면 0이 나옴
console.log(+true); // true를 숫자로 전환하면 1이 나옴
console.log(+"text"); // 안에 문자가 들어있는 문자형을 숫자로 전환하면 NaN이 나옴
console.log(+undefined); // undefined도 숫자가 아니므로 NaN이 나옴

console.log(!!1); // 두 번 부정하면 1의 원래 값인 true가 나옴
// ! 부정연산자
// !! 값을 boolean 타입으로 변환함
