let a = 4;
function factorial(num) {
  let arr = Array.from(Array(num + 1).keys());
  console.log(arr.slice(1));
  let red = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  console.log(red);
}
factorial(a);
