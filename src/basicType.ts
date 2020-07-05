// ts는 js 기본타입을 모두 제공 (원시 타입 - es5이전)
let numValue: number;
let stringValue: string;
let boolenValue: boolean;
let undefinedValue: undefined; // undefined 타입은 모든 타입의 상위 타입
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numValue = 3.3;
numValue = 3;
stringValue = "hello";
stringValue = "hello";
stringValue = `
hello
${1 + 1}
hi
`;

boolenValue = true;
undefinedValue = null;
numValue = null;
numValue = undefined;
anyValue = 1;
anyValue = "3";
anyValue = null;
anyValue = {};

objValue = { name: "ha-young" };
objValue = new String("hello"); // new가 붙어있기 때문에 repo형태로 반환.
objValue = String("hello"); // error

// ES6 새로운 primitive type : Symbol

symbolValue = Symbol(); // Symbol 타입은 Symbol() 함수(생성자x)를 통해서만 생성가능.

//사용 법 : 객체의 Property로 (key) 쓰인다.
{
  symbolValue: "hello";
}

// typescript의 배열 선언
let nameList: string[];
nameList = [1, 3]; // error
nameList = ["1", "3"];
nameList.push(333); // error
nameList.push("333");

// 배열에 타입을 섞어주고 싶다면
let anyList: any[]; // 처럼 any 타입으로 선언

// typescript의 객체 선언 (property에 타입선언) - inline 타입
let user1: { name: string; score: number };
user1 = {
  name: "jay",
  score: 30,
};

user1 = {
  name: 3, // error
  score: "30", // error
};

let user2: { name: string; score: number };
// 와 같이 반복되는 인라인타입의 경우,
// 타입 얼라이언스, 인터페이스, 클래스 등을 이용한다

let tuple2: [number, string]; // 정의된 type과 개수로만 이루어진 tuple 선언
tuple2 = [1, "3"];
tuple2 = [1, 1]; // error
tuple2 = [1, "3", "4"]; // error
