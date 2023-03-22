// static 정적 프로퍼티, 메서드
class Fruit {
  // 속성 앞에 static 메서드를 붙일 수 있음(인스턴스 레벨에서는 접근 X)
  //Fruit이라는 class 이름을 통해서만 접근이 가능
  static MAX_FRUITS = 4;
  //생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 함수를 생성자 함수 안에서 생성해도 되지만
  // 클래스에 필요한 멤버 함수는 생성자 함수 안에서 등록하지 않고 보통은 생성자 밖에서 생성
  // function을 붙이면 안됨

  // 클래스 레벨
  // 클래스 별로 공통적으로 사용할 수 있고 만들어진 인스턴스 데이터에 참조한 필요가
  // 없는 함수라면 static으로 만들 수 있음
  static makeRandomFruit() {
    // 클래스 레벨으 메서드에서는 주어진 데이터가 채워지지 않은 상태의
    // 템플릿이기 때문에 this를 참조할 수 없음(class 자체로는 아무것도 채워지지 않았기 때문)
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드
  // 만들어진 object의 데이터에 접근하여 출력해야 하기 때문에 인스턴스와 밀접하게 연관이 있으므로
  // 그대로 인스턴스 레벨로 두는 게 좋음.
  display = () => {
    // display (){} => 이런식으로 써도 됨
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// console.log(Fruit.name);
// Fruit.display();
// 객체 자체에는 데이터들이 채워져 있지 않아 이 자체만으로는 호출이 불가능
// 속성에 접근해도 데이터가 없는 상태

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);

// class라는 Fruit에 static이라는 함수는 만들어진 인스턴스 안에는
// 포함되어 있지 않고 class Fruit이라는 이름을 통해서만 접근이 가능
