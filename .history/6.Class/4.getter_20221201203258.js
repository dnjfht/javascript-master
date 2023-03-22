// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
    // 생성자에서 한 번 만들어지고 나서 업데이트가 되지 않음
    // 계속 업데이트가 되길 바란다면 함수로 써야만 함
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
    // 이건 특정한 행동을 한다기 보다는 두 가지를 조합해서 보여주는 것이기 때문에
    // 속성의 한 부분이라고 간주되는 이런 것들을 함수로 만들어야 할 때 접근자 프로퍼티(get)를 사용
  }

  //할당하게 되면 set이 호출될 것
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("수지", "김");
student.firstName = "안나";
console.log(student.lastName);
console.log(student.firstName);
// console.log(student.fullName());
// 행동을 하는게 아니구 이름이라는 상태를 보여주는 건데 함수처럼 호출하니까 조금 이상
// 이때 사용 가능한 게 접근자 프로퍼티
console.log(student.fullName);
// 이렇게 하면 문제점이 생김
// 생성자가 호출되면 벌써 풀네임이 지정됨
// 학생의 firstName을 안나라고 바꿔도 풀네임은 김 수지라고 나오게 됨

// console.log(student.fullName());
// 계속 업데이트가 되길 바란다면 함수로 써야만 하지만 fullName() 이런식으로 접근하기가 싫음
// 이럴 떈 원하는 함수 앞에 get을 붙여주면 됨 => 접근자 프로퍼티

student.fullName = "김철수";
// set이라는 함수가 호출되어서 김철수가 출력됨
