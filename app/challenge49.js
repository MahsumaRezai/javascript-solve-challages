// 49: Shuffle an array of strings
function arr() {
    let str = ["ali", "ahmad", "reza", "ehsan"];
    for (let i = 0; i < str.length; i++) {
        let str2 = str.sort();
        let str3 = str2.reverse();
        console.log(str3)

    }
}
arr()