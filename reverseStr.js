/*
Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split,reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception was thrown, this should be the original string.
*/

function reverseString(s) {
  if (typeof s !== "string") {
    throw TypeError("Input value is not string");
  }

  let stringArr = s.split("");

  let reverseArr = stringArr.reverse();

  let result = reverseArr.join("");
  return result;
}

console.log(reverseString("asd"));
// console.log(reverseString(1234));
