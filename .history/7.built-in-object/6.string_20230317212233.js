const textObj = new String("Hello World!"); // 객체를 만드는 것
const text = "Hello World!";
console.log(textObj);
console.log(text);

console.log(text.substring);
// string에 관한 모든 것들을 알 수 있음
// interface String { }이라는게 있는데 여기 있는 문법은 타임 스크립트를 공부하면 이해하기 쉬움
// toString이라는 함수를 호출시 string이 반환됨
// charAt(pos: number) : string; => number를 사용해서 charAt을 호출하면 그 위치에 있는 문자를 반환해줌

console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf("l")); // l이 몇 번째에 있는지 알랴즘
console.log(text.lastIndexOf("l")); // l이 뒤에서 몇 번째에 있는지 알랴즘

console.log(text.includes("tx")); // "tx"를 포함하고 있는지
console.log(text.includes("h"));
console.log(text.includes("H")); // true

console.log(text.startsWith("H")); // H로 시작하는지 안하는지
console.log(text.startsWith("p")); // p로 시작하는지 안하는지
console.log(text.endsWith("!")); // !로 끝나는지 안하는지

console.log(text.toUpperCase()); // 모두 대문자로 바꾸기
console.log(text.toLowerCase()); // 모두 소문자로 바꾸기

console.log(text.substring(0, 2)); // 0부터 2 미만까지만 잘라서 출력 => He
console.log(text.slice(2)); // 2 미만까지 잘라내고 나머지만 출력 => llo World!
console.log(text.slice(-2)); // 뒤에서 2 미만까지 남겨두고 나머지의 것들을 잘라냄 => d!

const space = "             space            ";
console.log(space.trim()); // 공백 모두 제거

const longText = "Get to the, point";
console.log(longText.split(" "));
// " " => 빈 칸을 기준으로 끊어내고 싶을 때 => ["Get", "to", "the,", "point"];
console.log(longText.split(" ", 2));
// 빈 칸을 기준으로 끊어내고 두 덩이만 갖고 싶을 때 => ["Get", "to"];
console.log(longText.split(",", 2));
// 콤마를 기준으로 끊어내고 싶을 때 => ["Het to the", "point"];
console.log(longText.split(", ", 2));
// 콤마와 빈 칸을 기준으로 끊어내고 싶을 때
