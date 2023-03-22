function display(num) {
  // 인자란, 함수 내부에서 사용하고 있는 변수와 비슷함
  // let num = 4;
  // 함수 내부에서 전달받아오는 인자의 값을 변경하면?
  // 5가 할당이 되었기 때문에 console.log(num)에는 5가 출력이 될 것
  // but, value의 변수에는 4가 그대로 들어있어 console.log(value);에서는 4가 출력
  // 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 XXX
  // 상태변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함
  // 원시값 - 값에 의한 복사가 이뤄지기 때문에 큰 문제는 X
  // 객체값 - 참조에 의한 복사 ( 메모리 주소 )가 이뤄져 동일한 오브젝트를 가리킴
  num = 5; // 정말 좋지 않음
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = "Bob"; // XXX 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 X
  console.log(obj);
}
const ellie = { name: " Ellie" };
displayObj(ellie);
console.log(ellie);
// ellie라는 object를 외부에서 만든 후 함수에 전달할 때는 값이 전달되는 것이
// 아니라 레퍼런스(참초값)가 전달됨 => obj.name을 변경하는 순간 메모리 주소가 가리키고 있는
// 실제 오브젝트의 이름을 변경하게 됨

// 부득이하게 외부로부터 주어진 인자(오브젝트)를 내부에서 변경해야 할 때
// 무엇을 변경할 것인지 명확하게 표시해줘야 함
// 함수 내부에서 무언가를 바꿔야 한다면 우선 이름부터 변경 (호출하는 사람이 헷갈리지 않도록)
// 반환할 때는 새로운 오브잭트 만들기
function changeName(obj) {
  return { ...obj, name: "Bob" };
  // 기존에 주어진 object를 그대로 유지하면서 변경하고자 하는게 있다면 옆에 표시
  // 이렇게 하면 새로운 object가 만들어짐
}
