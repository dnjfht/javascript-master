// 생성자 함수

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략 가능
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

// Class

// class 템플릿은 중괄호로 만들어줘야 함.
// Fruit class를 이용해서 만드는 객체의 필요한 데이터를 채워줄 수 있는 생성자(constructor) 지정.

class Fruit {
  // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emogi) {
    this.name = name;
    this.emoji = emoji;
  }
}
