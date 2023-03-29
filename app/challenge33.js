// 33. Calculate the sum of numbers received in a comma delimited string
// answer 
function sum() {
    let sp = "12, 2345";

    let s = sp.split(",");
    let total = 0;
    for (let n of s) {
        total += parseFloat(n);
    }
    return total

}
sum()
