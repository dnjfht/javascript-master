// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ["🍓", "🍑", "🍉", "🍒"];
const [first, second, ...others] = fruits;
console.log(fruits[0]);
// 🍓
console.log(first); // 🍓
console.log(second); // 🍑
console.log(others); // [ '🍉', '🍒' ]

const point = [1, 2, 8];
const [x, y, z] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 8

function createEmoji() {
  return ["strawberry", "🍓"];
}
const [title, emoji] = createEmoji();
console.log(title); // strawberry
console.log(emoji); // 🍓

const ellie = { name: "Seungmin", age: 24, job: "s/w engineer" };
function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(ellie);
// 이름 Seungmin
// 나이 24
// 직업 s/w engineer

const { name, age, job: occupation, pet = "강아지" } = ellie;
console.log(name); // Seungmin
console.log(age); // 24
console.log(occupation); // s/w engineer
console.log(pet); // 강아지

// Quiz

const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor(인자만들어보세요) {
  console.log(color);
}

changeColor(prop);
