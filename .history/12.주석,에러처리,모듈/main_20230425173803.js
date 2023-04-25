console.log(count);
increase();
console.log(count);
increase();
console.log(count);

// counter.js에 있는 변수 count와 increase 함수를 index.html을 통하여 공유하기 때문에
// 변수 count와 increase 함수를 가져다 쓸 수 있음.
// 기본적으로는 브라우저 상에서 자바스크립트 파일을 서로서로 공유하고 확인할 수 있음.

count -= 10;
console.log(count);
