// 45 Create a function to calculate the sum of all the numbers in a jagged array
// answer 
function arr() {
    let arr2 = [12, 13, [15], [98]];
    for (let i = 0; i < arr2.length; i++) {
        let arr4 = arr2.reduce((a, b) => {
            return a + b;

        })
        console.log(arr4)
    }

}
arr()