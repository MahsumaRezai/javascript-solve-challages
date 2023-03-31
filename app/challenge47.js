// #47: Deep copy a jagged array with numbers or other arrays in a new array
// answer 

function arr() {
    let arr2 = [12, 13, 14, 15, [23], 90, [34]];
    for (x in arr2) {
        let arr3 = arr2;
        console.log(arr3)
    }
}
arr()
