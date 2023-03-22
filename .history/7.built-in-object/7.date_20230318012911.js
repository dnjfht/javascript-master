// UTC 기준 (협정 세계시, 1970년도 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date()); // 아무런 인자를 주지 않으면 현지 시각 설정
console.log(new Date("Jun 5, 2022")); // 2022-06-04T15:00:00.000Z
console.log(new Date("2022-12-17T03:24:00")); // 2022-12-16T18:24:00.000Z
// 지역에 따라서 플랫폼에서 사용하는 locale이 다르기 때문에 시간과 locale 두 가지를
// 정확히 알고 적용해야 함. 한국에서는 3시라고 하지만 UTC 시점에서는 전날 16시가 되기 때문
// node 개발환경은 000Z, Chrome 브라우저 콘솔창은 GMT+0900 (한국 표준시)
// T는 날짜와 시간을 구분

console.log(Date.now()); // 1670005730071
console.log(Date.parse("2022-12-17T03:24:00")); // 1671215040000
// 특정한 시간을 펄싱해서 밀리초 단위로 표기가 가능
// Date.now() : 메소드는 UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환

const now = new Date();
now.setFullYear(2023); // 년도를 설정 가능
now.setMonth(10);
now.setDate(24);
// 달을 설정 가능 => 달은 0부터 시작, 0 : 1 => 10 : 11
console.log(now); // 2023-12-02T18:50:03.063
console.log(now.getFullYear()); // 2023
console.log(now.getDate());
console.log(now.getDay()); // 0: 일요일부터 1... 6 : 토요일 => UTC 시간 기준 금요일로 떠서 5
console.log(now.getMonth()); // 10:11월
console.log(now.getSeconds()); // 32초

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString("en-US"));
console.log(now.toLocaleString("ko-KR"));
