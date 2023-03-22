// Math
// static properties, method
console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI값 // 3.14159265...

// static method
// 절대값
console.log(Math.abs(-10)); // -값을 넣어도 + 값이 나옴
// 소수점 이하를 올림
console.log(Math.ceil(1.4)); // 2
// 소수점 이하를 내림
console.log(Math.floor(1.4)); // 1
// 소수점 이하를 반올림
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2
// 정수만 변환
console.log(Math.trunc(1.5432)); //1

// 최대, 최솟값을 찾기
console.log(Math.max(1, 3, 4)); // 최댓값인 4 출력
console.log(Math.min(1, 3, 4)); // 최솟값인 1 출력

// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));

// 제곱근
console.log(Math.sqrt(9)); // 9의 제곱근인 3을 출력

// 랜덤한 값을 반환
console.log(Math.random()); // 0보다 크고 1보다 작은 숫자를 랜덤하게 만들어줌

// 1~10까지 중 추출하고 싶다면
console.log(Math.floor(10 * Math.random() + 1));
