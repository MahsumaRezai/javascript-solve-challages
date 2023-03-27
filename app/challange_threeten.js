// 13.Find the maximum number in an array of numbers
// answer   
let arr3 = [1, 2, 3, 4, 5];
let maxvalue = arr3.reduce((a, b) => {
    if (a > b) {
        return a

    }
    else if (a < b) {
        return b;
    }
})
document.write(maxvalue);