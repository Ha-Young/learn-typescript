var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
  if (true) {
    const score = 200;
    score = 30; // error
    score = "30"; // error
  }
}

outer();
