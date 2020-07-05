// enum 선언
// 선언 순서대로 0, 1, 2 ... 와 같이 값이 들어가진다.
enum StarbuksGrade {
  WELCOME, // 0
  GREEN, // 1
  GOLD, // 2
}

// enum또한 type으로 사용가능하다
function getDiscound(v: StarbuksGrade): number {
  switch (v) {
    case StarbuksGrade.WELCOME:
      return 0;
    case StarbuksGrade.GREEN:
      return 5;
    case StarbuksGrade.GOLD:
      return 10;
  }
}

// enum 사용방법 예시
console.log(getDiscound(StarbuksGrade.GREEN));
// 5
console.log(StarbuksGrade.GREEN);
// 1
console.log(StarbuksGrade);
// {
//   '0': 'WELCOME',
//   '1': 'GREEN',
//   '2': 'GOLD',
//   WELCOME: 0,
//   GREEN: 1,
//   GOLD: 2
// }
console.log(StarbuksGrade["GOLD"]); // 2
console.log(StarbuksGrade["0"]); // WELCOME

// enum 초기값 선언도 가능한데, 이렇게 해주는게 보다 안전. (추가되는 것이 있을 수 있기 때문)
enum StartbucksGrade2 {
  WELCOME = 0,
  DDDD = 3,
  GREEN = 1,
  GOLD = 2,
  FFFF = "HELLO", // 초기값에 문자열도 가능하다
}

console.log(StartbucksGrade2);
// {
//   '0': 'WELCOME',
//   '1': 'GREEN',
//   '2': 'GOLD',
//   '3': 'DDDD',
//   WELCOME: 0,
//   DDDD: 3,
//   GREEN: 1,
//   GOLD: 2,
//   FFFF: 'HELLO'
// }
console.log(StartbucksGrade2["WELCOME"]); // 0
console.log(StartbucksGrade2["FFFF"]); // HELLO
