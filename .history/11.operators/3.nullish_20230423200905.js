// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ??
// null, undefined일 때만 뒤에껄 표현하고 싶음. => nullish 사용.
// || falshy한 경우 설정(할당) => null, undefined, 0, -0, ""

let num = 0;
console.log(num || -1);
// num이 없을 때만 -1을 출력하고 싶음
// num에는 현재 유효한 0이 있기 때문에 0을 출력해야 하는데
// 0은 falshy 값이므로 ||를 사용할 경우 -1을 출력함.
