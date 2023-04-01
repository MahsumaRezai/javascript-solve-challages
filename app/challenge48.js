//  48  Create a function to return the longest word in a string
// answer 

function large() {
    let word = "majdjdj";
    for (let i = 0; i < word.length; i++) {
        if (word.length >= 10) {
            console.log("this is a lare word")
        }
        else if (word.length < 10) {
            console.log("this is small word")
        }

    }
}
large()