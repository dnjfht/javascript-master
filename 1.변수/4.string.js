// 문자열 타입
let string = "안녕하세요";
string = "안녕!";
console.log(string);

// 특수 문자 출력하는 법
string = '"안녕!"';
console.log(string);

string = "안녕!\n엘리야!\t\t내 이름은\\\u09AC";
// \n은 새로운 줄바꿈을 의미, \t는 tab(네 칸 띄우기)이 한 번 들어감
// 그냥 백슬래쉬(\)를 나타내고 싶다면 \\ 이렇게 두 번 사용해줘야 함
// 백슬래쉬 다음에 u를 작성하고 원하는 유닛코드를 작성해주면 그에 맞는 유닛코드가 화면에 나타남
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = "엘리";
let greetings = "'안녕!, " + id + "\n'즐거운 하루 보내요!'";
console.log(greetings);
greeting = `'안녕, ${id}
즐거운 하루 보내요!`;
console.log(greetings);
