// 46
function maxvalue() {
    let arr = [12, 13, 14[56], [90]];
    let arr2 = arr.reduce((a, b) => {
        if (a > b) {
            return a;

        }
        else {
            return b;
        }

    })
    console.log(arr2)

}
maxvalue()