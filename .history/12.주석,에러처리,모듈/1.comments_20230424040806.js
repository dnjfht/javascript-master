// 주석 Comments
// 한 줄짜리 주석을 작성할 때 씀.
// TODO(승민) : 해야 할 일을 작성.
// TODO(승만) : XX기능 구현하기.

/*
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음.
 * (단, 정말 필요한 경우에만 사용.)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음.
// 사용할 수 있는 주석 방법에 관하여 많이 나옴.

/**
 * 제일 첫 줄에는 함수에 대한 설명을 적어주는 것. => 주어진 두 인자를 더한 값을 반환함.
 * @param {*} a 숫자1
 * @param {*} b 숫자2
 * @returns
 */

/* 를 만들고 enter를 치면 됨 */

function add(a, b) {
  return a + b;
}
