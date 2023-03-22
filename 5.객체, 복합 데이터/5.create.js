// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//     // 객체 안에서 자기 자신의 속성에 접근할 때는 항상 this라는 걸 붙여줘야 함
//   },
// };

// apple.display();

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 객체를 만들 때 너무 비슷한 양식인데 따로 만들려면 너무 귀찮으니까
// 그래서 특정한 템플릿에 맞게 객체를 쉽게 만들 수 있는 생성자 함수를 이용하면
// 정해진 틀 안에서 원하는 객체를 만들 수 있음
// 반복적으로 작성할 필요가 없이 한 번만 양식을 만들어두고 new라는 키워드를 이용해서
// 새로운  과일을 찍어낼 수 있음

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

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
