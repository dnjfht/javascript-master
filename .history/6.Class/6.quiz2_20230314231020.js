// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  #value;
  constructor(startNumber) {
    // 무언가가 NaN인지 판별하는 방법 => isNaN (true 또는 false를 출력)
    if (isNaN(startNumber) || startNumber < 0) {
      this.#value = 0;
    } else {
      this.#value = startNumber;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    ++this.#value;
  };
}

const counter = new Counter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.value); // counter에 있는 현재 value를 출력
