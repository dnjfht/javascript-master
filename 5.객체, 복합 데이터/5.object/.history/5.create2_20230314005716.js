function Sport(name, emogi) {
  (this.name = name),
    (this.emogi = emogi),
    (this.display = () => {
      console.log(`${this.name} : ${this.emogi}`);
    });
  return Sport;
}

const soccer = new Sport("soccer", "⚽");
const tenis = new Sport("Tenis", "🎾");

console.log(Sport);
console.log(soccer.name);
