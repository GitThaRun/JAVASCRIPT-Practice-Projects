/*Create a faulty calculator using JavaScript

The calculator should have the following:
1.It takes two inputs from user
2.It should perform wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> *
*/

let random = Math.random();
console.log(random);
let num1 = Number(prompt("Enter First Numebr:"));
let operation = prompt("Enter Operation :");
let num2 = Number(prompt("Enter Second Number:"));

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "*",
};
if (random > 0.1) {
  console.log(`The calculation is ${num1} ${operation} ${num2}`);
  alert(`The Result is ${eval(`${num1} ${operation} ${num2}`)}`);
} else {
  operation = obj[operation];
  console.log(`The Result is ${eval(`${num1} ${operation} ${num2}`)}`);
}
