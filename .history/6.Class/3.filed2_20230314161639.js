class Fruit {
  static MAX_FRUITS = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  static makeRandomFruit() {
    return new Fruit("banana", "🍌");
  }

  display = () => {
    // display (){} => 이런식으로 써도 됨
    console.log(`${this.name}: ${this.emoji}`);
  };
}

console.log(Fruit.makeRandomFruit());
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
