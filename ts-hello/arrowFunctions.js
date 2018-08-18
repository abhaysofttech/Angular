var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
//make the do Log Function Shorter and cleaner
var doCleanLog = function (message) { return console.log(message); }; // called arrow function & in C# called labda expression
doCleanLog("text mesage");
