// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("놀자아~!");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();
console.log(tiger.color);
console.log(tiger);

class Dog extends Animal {
  constructor(color, ownerName) {
    // super => 내가 상속하고 있는 부모를 가리킴
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자아~!");
  }

  // 오버라이딩 overriding => 부모의 행동을 내 행동으로 덮어씌울것
  eat() {
    super.eat();
    console.log("강아지가 먹는다!");
  }
}
const dog = new Dog("빨강이", "앨리");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
