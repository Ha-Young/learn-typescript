var hello = "hello";
let hello2 = "hello2";
let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1 sec");
  }, 1000);
});

timeoutPromise.then(console.log);

import add from "./utils.js";
const returnVal = add(1, 2);
console.log(returnVal);
