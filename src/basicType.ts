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
