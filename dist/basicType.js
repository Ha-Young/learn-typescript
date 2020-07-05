let numValue;
let stringValue;
let boolenValue;
let undefinedValue;
let nullValue;
let objValue;
let symbolValue;
let anyValue;
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
objValue = new String("hello");
objValue = String("hello");
symbolValue = Symbol();
{
    symbolValue: "hello";
}
let nameList;
nameList = [1, 3];
nameList = ["1", "3"];
nameList.push(333);
nameList.push("333");
let anyList;
let user1;
user1 = {
    name: "jay",
    score: 30,
};
user1 = {
    name: 3,
    score: "30",
};
let user2;
let tuple2;
tuple2 = [1, "3"];
tuple2 = [1, 1];
tuple2 = [1, "3", "4"];
//# sourceMappingURL=basicType.js.map