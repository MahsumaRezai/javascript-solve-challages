//  Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
// answer
function addnum() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        if (arr % 2 == 0) {
            arr.reduce((a, b) => {
                let sum = a + b;
                return sum.toString();
            })

        }
    }

}
 addnum()