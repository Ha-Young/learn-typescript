// interface는 하나의 타입을 정의한다고 생각하면 된다.
// 1. 어떠한 행위를 해야 한다고 선언.
interface TV {
  turnOn(): void; // return type : void
  turnOff(): boolean; // return type : boolean
}

const myTV: TV = {
  turnOn() {},
  turnOff() {
    return true;
  },
  turnOff() {}, // error
};

// 어떠한 함수에서 인자로 받을 때 해당 인자에 interface를 받는다고 명시할 수 있다.
function tryTurnOn(tv: TV) {
  tv.turnOn();
}

tryTurnOn(myTV);
// 각각 다양한 turnOn, turnOff의 행위를 가지는 TV들을 생성 할 수 있게되는데,
// 이것이 바로 다형성이다.

const SamsungTV: TV = {
  turnOn() {
    console.log("samsung tv on");
  },
  turnOff() {
    console.log("samsung tv off");
    return true;
  },
};

const LGTV: TV = {
  turnOn() {
    console.log("lg tv on");
  },
  turnOff() {
    console.log("lg tv off");
    return true;
  },
};

// 각기 다르게 동작한다.
tryTurnOn(myTV);
tryTurnOn(SamsungTV);
tryTurnOn(LGTV);

// 하지만 typescript에서의 interface를 사용하는 방식의 자주 사용되는 방식은,
// 속성의 type을 명시하는 것.

interface Cell {
  row: number;
  col: number;
  piece?: Piece; // ? 는 optional한 것. 꼭 가져야 하는건 아님.
}

interface Piece {
  move(from: Cell, to: Cell): boolean; // 인자 타입 정의, 리턴 타입 정의
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({ row, col });
    }
  }

  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
