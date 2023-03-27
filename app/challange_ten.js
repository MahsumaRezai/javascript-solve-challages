//. 10. Calculate the sum of numbers in an array of numbers;
// answer 
function f() {
    let arr = [1, 2, 3, 4, 5, , 6, 7, 8];
    let sum = arr.reduce((s, c) => {
        return s + c;

    })
    document.write("<br>", sum);
}
f();