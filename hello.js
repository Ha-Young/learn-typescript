"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello = "hello";
let hello2 = "hello2";
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1 sec");
    }, 1000);
});
timeoutPromise.then(console.log);
const utils_1 = require("./utils");
const returnVal = utils_1.default(1, 2);
console.log(returnVal);
