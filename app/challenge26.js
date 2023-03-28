// 26. Create a function that will receive two arrays and will return an array with
// elements that are in the first array but not in the second
function array() {
    let arr = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8, 9, 10];
    let arr3 = arr2.concat(arr);
    let arr4 = arr3.reverse()
    document.write(arr4);
    let arr5 = arr.push(20);
    document.write(arr5);

}
array()