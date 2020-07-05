function add(x, y) {
    return x + y;
}
function add2(x, y) {
    return x + y;
}
const result = add(1, 2);
const result2 = add2(3, 4);
function buildUserInfo(name, email) {
    return { name, email };
}
buildUserInfo();
function buildUserInfo2(name, email) {
    return { name, email };
}
const user = buildUserInfo2();
function buildUserInfo3(name = "default", email = "just like this") {
    return { name, email };
}
const user3 = buildUserInfo3();
const add3 = (a, b) => a + b;
function store(type) {
    if (type === "통조림") {
        return { a: "통조림" };
    }
    else if (type === "아이스크림") {
        return { b: "아이스크림" };
    }
    else {
        throw new Error("unsupported type");
    }
}
const s = store("아이스크림");
s.a;
s.b;
//# sourceMappingURL=function.js.map