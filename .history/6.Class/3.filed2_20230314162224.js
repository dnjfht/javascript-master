class Fruit {
  name;
  emoji; // constructor에서 주어지는 데이터라면 필드에서 생략 가능
  type = "과일"; // type은 class가 만들어지자마자 과일로 초기화가 미리 되어있음.
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    // display (){} => 이런식으로 써도 됨
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
