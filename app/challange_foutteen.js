// 14.  Print the first 10 Fibonacci numbers without recursion
let first = 0;
document.write(first);
let second = 1;
document.write(second);
for (let x = 2; x <= 10; x++) {
    let thrid = first + second;
    document.write(thrid, "<br>")
    first = second;
    second = thrid;
}
