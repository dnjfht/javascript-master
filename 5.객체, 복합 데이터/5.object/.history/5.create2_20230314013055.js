function Sport(name, emogi) {
  this.name = name;
  this.emogi = emogi;
  this.display = () => {
    console.log(`${this.name} : ${this.emogi}`);
  };

  return this;
}

const soccer = new Sport("soccer", "⚽");
const tenis = new Sport("tenis", "🎾");

console.log(soccer);
console.log(tenis);
console.log(soccer.name);
console.log(soccer.emogi);

function Desert(name, emogi, calorie) {
  this.name = name;
  this.emogi = emogi;
  this.calorie = calorie;
  this.display = () => {
    console.log(`${this.name}.`);
  };
  return this;
}

const cake = new Desert("cake", "🎂", 2000);
const cookie = new Desert("cookie", "🍪", 1000);
console.log(cake);
console.log(cookie);
console.log(cake.display);
