// Class

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
