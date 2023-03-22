const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: 🍎`);
    // 객체 안에서 자기 자신의 속성에 접근할 때는 항상 this라는 걸 붙여줘야 함
  },
};

apple.display();
