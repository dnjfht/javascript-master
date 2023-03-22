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
    console.log(`${this.name}${this.emogi}은 ${this.calorie} 칼로리 입니다.`);
  };
  return this;
}

const cake = new Desert("cake", "🎂", 2000);
const cookie = new Desert("cookie", "🍪", 1000);
console.log(cake);
console.log(cookie);
