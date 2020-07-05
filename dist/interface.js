const myTV = {
    turnOn() { },
    turnOff() {
        return true;
    },
    turnOff() { },
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTV);
const SamsungTV = {
    turnOn() {
        console.log("samsung tv on");
    },
    turnOff() {
        console.log("samsung tv off");
        return true;
    },
};
const LGTV = {
    turnOn() {
        console.log("lg tv on");
    },
    turnOff() {
        console.log("lg tv off");
        return true;
    },
};
tryTurnOn(myTV);
tryTurnOn(SamsungTV);
tryTurnOn(LGTV);
function createBoard() {
    const cells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({ row, col });
        }
    }
    return cells;
}
const board = createBoard();
board[0].piece = {
    move(from, to) {
        return true;
    },
};
//# sourceMappingURL=interface.js.map