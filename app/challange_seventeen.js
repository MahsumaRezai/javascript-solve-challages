// 17.  Calculate the sum of digits of a positive integer number

let arrlist = [1, 2, 3, 4, 5, 6, 7, 8];
for (let x = 0; x < arrlist; x++) {
    if (x % 2 == 0) {
        arrlist.reduce((a, b) => {
            return a + b;

        })


    }
    else {
        document.write("your number is nag")
    }
}