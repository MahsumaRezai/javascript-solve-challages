// 35  Create a function to convert a CSV text to a “bi-dimensional” array
// answer 
function text() {
    let word = "Hello form the js code";
    let word2 = word.split("\n");
    for (let i = 0; i < word2.length; i++) {
        let word3 = word2.splice(",");
        word2[i] = word3;

    }
    return word2

}
text();
