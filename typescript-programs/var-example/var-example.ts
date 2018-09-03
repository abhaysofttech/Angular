
function doSomething() {
    // used the var for in a for loop
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    // print the final value of i
    console.log('Finally value of i :-' + i)
}
doSomething();

// run the command to comiple ts --------------- tsc var-example.ts
//run the comment to see the below Output ------ node var-example.js
// Output ************
// 0
// 1
// 2
// 3
// 4
// Finally value of i :-5