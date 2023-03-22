// 접근제어자 - 캡슐화
// 다른 프로그렘 언어에는 private, public, protected 키워드가 있음.
// 자바스크립트에는 이런 키워드가 없고, 기본적으로 아무것도 사용하지 않으면 모두 공개, 접근 가능한 상태.
// 외부에서 접근을 못하게 하려면 private : #이라는 키워드를 사용하면 됨.

class Fruit {
  #name;
  #emoji; // constructor에서 주어지는 데이터라면 필드에서 생략 가능
  type = "과일"; // type은 class가 만들어지자마자 과일로 초기화가 미리 되어있음.
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    // display (){} => 이런식으로 써도 됨
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

// 한 번 객체가 만들어진 다음에 이렇게 외부에서 수정이 불가능하게 하고싶음.
// apple의 name이 오렌지인건 이상함.
// apple.#name = "orange"; => #filed는 외부에서 접근이 불가능함
console.log(apple);
// 우리가 인스턴스에 만들어진 것을 출력할 때도 #filed는 뜨지 않음.
