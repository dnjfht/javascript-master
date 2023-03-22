class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    type = "과일";
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
