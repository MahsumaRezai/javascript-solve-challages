// 43 .Create a function that will receive a bidimensional array as argument and a number and will extract as a
// unidimensional array the column specified by the number
// answer 
function arr() {
    let arr = [
        [1, 2, 3, 4,],
        [5, 6, 7, 8]
    ]
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[0] + arr[1];
        let arr3 = [];
        arr3.push(arr2)
        console.log(arr3)
    }
}
arr();
