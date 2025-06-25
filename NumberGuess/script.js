const MinNum = 1;
const MaxNum = 100;
const Answer = Math.floor(Math.random() * (MaxNum - MinNum + 1)) + MinNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = parseInt(prompt(`Enter a Number Between ${MinNum} and ${MaxNum}:`));

  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < MinNum || guess > MaxNum) {
    alert("Please Enter a Valid Number");
  } else {
    attempts++;
    if (guess < Answer) {
      alert("TOo Low!Try Again.");
    } else if (guess > Answer) {
      alert("TOo High!Try Again.");
    } else {
      alert(
        `Congratulations! You guessed the number ${Answer} in ${attempts} attempts.`
      );
      running = false;
    }
  }
}
