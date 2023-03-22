// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 함수도 객체이기 때문에 객체를 다른 변수에 할당하거나 재할당이 가능한 것과 같음

let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 좀 더 간결하게 표현할 수 있는 화살표 함수 const name = () => { }
// 코드 안에서 특별한 일을 하지 않고 어떤 값을 바로 return하는 경우라면
// 이런 { } 괄호도 생략이 가능, return도 생략이 가능

//add = (a, b) => {
//  return a + b;
//};

add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function() { } // 뒤 객체편에서 다룸

// 함수를 () 괄호로 묶으면 함수가 값으로 변환이 됨. 거기에 ()를 붙여주면 바로 실행이 됨
// IIFE (Immedicately-Invoked Function Expressions) :
// 함수를 정의하면서 바로 호출하고 싶을 때 사용하는 방법
// 자바스크립트에서 잘 쓰이지 않음
(function run() {
  console.log("🥵");
})();
