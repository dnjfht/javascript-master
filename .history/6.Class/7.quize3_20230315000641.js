// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한 달 근무 시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, workTime, pay) {
    this.name = name;
    this.department = department;
    this.workTime = workTime;
    this.pay = pay;
  }

  get culculator() {
    return this.pay * this.workTime;
  }
}

class Unofficial extends Employee {}
const unofficial = new Unofficial("김나나", "마케팅부", 249, 8000);
console.log(unofficial);
