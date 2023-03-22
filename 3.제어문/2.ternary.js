// 삼황 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우
let fruit = "strawberry";
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
  console.log("🍓");
}
fruit === "apple" ? console.log("🍎") : console.log("🍊");

let emoji = fruit === "apple" ? "🍎" : "🍊";
console.log(emoji);
