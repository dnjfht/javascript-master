// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한 달 근무 시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employ {
  constructor(name, partName, workTime) {
    this.name = name;
    this.partName = partName;
    this.workTime = workTime;
  }

  pay() {
    return this.workTime * 10000;
  }
}

class OnStaff extends Employ {}
const onStaff = new OnStaff("김수지", "회계부서", "209");
console.log(onStaff);
console.log(onStaff.pay());

class PartStaff extends Employ {
  pay() {
    super.pay();
    return this.workTime * 8000;
  }
}

const partStaff = new PartStaff("김호영", "생산관리", "200");
console.log(partStaff);
console.log(partStaff.pay());
