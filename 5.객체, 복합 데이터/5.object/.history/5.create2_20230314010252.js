function Sport(name, emogi) {
  this.name = name;
  this.emogi = emogi;
  this.display = () => {
    console.log(`${this.name} : ${this.emogi}`);
  };

  return Sport;
}

const soccer = new Sport("soccer", "⚽");
const tenis = new Sport("tenis", "🎾");

console.log(soccer);
console.log(tenis);
console.log(soccer.name);
console.log(soccer.emogi);
