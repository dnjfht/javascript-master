import increase from "./counter.js";
// export default로 설정을 해주고 하나만 가져오는 것이기 때문에 이름을 원하는 대로 설정 가능.

// console.log(count);
// increase();
// console.log(count);
// increase();
// console.log(count);

// counter.js에 있는 변수 count와 increase 함수를 index.html을 통하여 공유하기 때문에
// 변수 count와 increase 함수를 가져다 쓸 수 있음.
// 기본적으로는 브라우저 상에서 자바스크립트 파일을 서로서로 공유하고 확인할 수 있음.

// count -= 10;
// console.log(count);

// 이렇게 파일끼리 서로서로 변경할 수 있는 건 버그에 치명적임.
// 이걸 방지하기 위해서 각각의 파일 별로 모듈처럼 만드는 걸 쓸 수 있음.

increase();
