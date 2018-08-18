function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
function doSomethingElse() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i); // even if use let keyword TS witl give the compile time error.
}
doSomething();
doSomethingElse();
