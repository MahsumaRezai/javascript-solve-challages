// 37   Create a function that will convert a string in an array containing the ASCII codes of each character
// answer
function arr() {
    let str = "Hello";
    let arr2 = [];
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt();
        arr2.push(code)

    }
    return arr2;


}
arr()
