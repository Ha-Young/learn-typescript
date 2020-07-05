// 인자에 타입 정의
function add(x: number, y: number) {
  return x + y;
}

// 반환되는 타입은 인자로 유추되지만 따로 정의 할 수 있다.
function add2(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
const result2 = add2(3, 4);

function buildUserInfo(name: string, email: string) {
  return { name, email };
}

// 아무런 값도 주지 않으면 애러가 난다.
buildUserInfo(); // error

// ?를 통해 optional하게 적용시킬 수 있다.
function buildUserInfo2(name?: string, email?: string) {
  return { name, email };
}

const user = buildUserInfo2(); // success

// default값을 줄 수도 있다.
function buildUserInfo3(
  name: string = "default",
  email: string = "just like this"
) {
  return { name, email };
}

const user3 = buildUserInfo3(); // {name: "default", email: "just like this"}

// arrow function에도 적용 가능
const add3 = (a: number, b: number): number => a + b;

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}

// function store(type: string): Storage {
//   return new Storage();
// }

// 인자값이 type값 체크도 가능하지만 정의된 상수값으로만 받도록 설정 할 수 있다. (function overLoad)
function store(type: "통조림"): Storage; // 통조림 string값이 들어오면 Storage형으로 반환
function store(type: "아이스크림"): ColdStorage; // 아이스크림 string값이 들어오면 ColdStorage형으로 반환

// 이런 것을 유니온 타입 이라고 한다.
function store(type: "통조림" | "아이스크림") {
  if (type === "통조림") {
    return { a: "통조림" };
  } else if (type === "아이스크림") {
    return { b: "아이스크림" };
  } else {
    throw new Error("unsupported type");
  }
}

const s = store("아이스크림");
s.a; // error
s.b;
