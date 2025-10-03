digits = [1, 2, 3];
var plusOne = function (digits) {
  let sum = digits.pop() + 1;
  let n = digits.length - 1;
  console.log(n, sum);
  if (digits[n] == 9) {
    sum = Array.from(String(sum), Number);
    console.log(sum);
    digits.push(sum.pop());
    console.log(digits);
  } else {
    digits.push(sum);
    console.log(digits);
  }
  //return digits;
};
