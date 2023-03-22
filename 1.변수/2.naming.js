// ctrl + c => 노드몬 종료

// 변수 규칙
// 라틴 문자 (0-9, a-z, A-Z,), _
// 대소문자를 구분함
// 추천 : camelCase(likeThis) => 두 개의 단어를 연결할 때는 두 번째 단어는 항상 대문자로
// 한국어 X
// 예약어 X : let if, let for => X
// 숫자로 시작 X
// 특수문자 X (_, $ 두 가지는 예외)\
// 이모지 X
// 여러 개 변수를 1,2,3 숫자로 구분 X => 최대한 의미있게, 구체적인 이름으로 작성!

let apple;
let redApple;

// 나쁜 예제
let number = 20;

// 좋은 예제
let myAge = 20;

// 나쁜 예제
let audio1;
let audio2;

// 좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁
// 뭔지를 먼저 나타내고 그 뒤에 구체적인걸 붙여줌
let audioBackground;
let audioWind;

audioBackground;
