var StarbuksGrade;
(function (StarbuksGrade) {
    StarbuksGrade[StarbuksGrade["WELCOME"] = 0] = "WELCOME";
    StarbuksGrade[StarbuksGrade["GREEN"] = 1] = "GREEN";
    StarbuksGrade[StarbuksGrade["GOLD"] = 2] = "GOLD";
})(StarbuksGrade || (StarbuksGrade = {}));
function getDiscound(v) {
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}
console.log(getDiscound(StarbuksGrade.GREEN));
console.log(StarbuksGrade.GREEN);
console.log(StarbuksGrade);
console.log(StarbuksGrade["GOLD"]);
console.log(StarbuksGrade["0"]);
var StartbucksGrade2;
(function (StartbucksGrade2) {
    StartbucksGrade2[StartbucksGrade2["WELCOME"] = 0] = "WELCOME";
    StartbucksGrade2[StartbucksGrade2["DDDD"] = 3] = "DDDD";
    StartbucksGrade2[StartbucksGrade2["GREEN"] = 1] = "GREEN";
    StartbucksGrade2[StartbucksGrade2["GOLD"] = 2] = "GOLD";
    StartbucksGrade2["FFFF"] = "HELLO";
})(StartbucksGrade2 || (StartbucksGrade2 = {}));
console.log(StartbucksGrade2);
console.log(StartbucksGrade2["WELCOME"]);
console.log(StartbucksGrade2["FFFF"]);
//# sourceMappingURL=enum.js.map