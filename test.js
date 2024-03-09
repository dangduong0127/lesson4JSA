// let h = 5;
// for (let i = 1; i <= h; i++) {
//   for (let j = i; j <= h; j++) {
//     document.writeln("&nbsp;&nbsp;");
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     document.writeln("1");
//   }
//   document.writeln("<br>");
// }

// // &nbsp;&nbsp;
// myArr = [2, 343, 43, 554, 54, 34, 0];
// for (let i in myArr) {
//   if (myArr[i] % 2 == 0 || myArr[i] == 0) {
//     console.log(myArr[i]);
//   }
// }

// Arr = [];

// let x = prompt("Em đẵ ăn cơm chưa?");
// Arr.push(x);
// if (x == "Yes") {
//   let z = prompt("Em có muốn ăn bánh ngọt klhông?");
//   Arr.push(z);
// }
// console.log(Arr);

const a = "value2";
myArr = [2, 343, 43, "Value", 54, 34, 0];
const Obj = {
  name: "Nguyen Van A",
  age: 19,
  address: "HP",
};
localStorage.setItem("test", JSON.stringify(Obj));

const x = JSON.parse(localStorage.getItem("test"));
console.log(x);
