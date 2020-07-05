var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
  function inner() {
    var score = 0;
  }
  console.log(score);
}

outer();
