// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한 달 근무 시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  #pay;
  constructor(name, department, workTime, pay) {
    this.name = name;
    this.department = department;
    this.workTime = workTime;
    this.#pay = pay;
  }

  culculator = () => {
    return this.#pay * this.workTime;
  };
}

class Unofficial extends Employee {
  static PAY = 8000;
  constructor(name, department, workTime) {
    super(name, department, workTime, Unofficial.PAY);
  }
}
const unofficial = new Unofficial("김나나", "마케팅부", 249);
console.log(unofficial);
const salary = unofficial.culculator();
console.log(salary);

class Official extends Employee {
  static PAY = 10000;
  constructor(name, department, workTime) {
    super(name, department, workTime, Official.PAY);
  }
}
const official = new Official("유미미", "인사팀", 249);
console.log(official);
const salary2 = official.culculator();
console.log(salary2);
