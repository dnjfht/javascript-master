// 접근제어자 - 캡슐화 =>
// 내부상으로 필요한 데이터를 외부에서 수정할 수 없도록 꽁꽁 캡슐화 해놓는 것
// private(#) => 내부에선 사용이 가능하고 외부에선 사용이 불가능,
// public(기본), protected
class Fruit {
  #name; // this.name = name 과 동일
  #emoji; // 보통 constructor에서 주어지는 데이터라면 생략이 가능
  #type = "과일";
  // class를 만들 때 바로 초기화하고 싶은게 있다면 이렇게 생성자 밖에서 지정 가능
  static MAX_FRUITS = 4;
  //생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    // display (){} => 이런식으로 써도 됨
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// 한 번 apple이라는 name을 지정해주고 emogi를 설정해주면 외부에서 변경이
//불가능하게 만들고 싶음 => 접근제어자 사용
console.log(apple);
