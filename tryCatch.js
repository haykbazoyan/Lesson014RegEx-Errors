// Convert the code using try...catch.

// function reverseString(s) {
//     typeof s !== "string" ? console.log("s.split is not a function") : (s = s.split("").reverse().join(""));
//     console.log(s);
// }

function reverseString(s) {
  try {
    s !== "string";
    s = s.split("").reverse().join("");
    console.log(s);
  } catch (error) {
    console.log("s.split is not a function");
  }
}

reverseString("123");
