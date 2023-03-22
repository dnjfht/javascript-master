console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// eval => 자바스크립트를 한 줄 한 줄 표현할 수 있음
eval("const num = 2; console.log(num)");
console.log(isFinite(1)); // 숫자가 유한한지 유한하지 않은지 보는것
console.log(isFinite(Infinity));

console.log(parseFloat("12.43")); // 문자를 숫자(실수)로 변경해줌
console.log(parseInt("12.43")); // 문자를 숫자(정수)로 변경해줌
console.log(parseInt("11"));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야 함
const URL = "https://드림코딩.com";
const encoded = encodeURI(URL);
// 한글이나 특수문자가 들어있는 주소가 있다면 encodeURI() 이 함수를 이용해서
// escape 처리를 해줘야 함

// escape 처리된 것을 다시 특수문자나 한글 URL로 되돌리고 싶다면
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component를 사용
const part = "드림코딩.com";
console.log(encodeURIComponent(part));
