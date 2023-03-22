function add(num1, num2) {
  console.log("function");
  return num1 + num2;
}
const result = add(200, 100);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName, lastName));

let lastName2 = "박";
let firstName2 = "수연";
console.log(fullName(firstName2, lastName2));
