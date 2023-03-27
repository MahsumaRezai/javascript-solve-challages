// part one 



//4. Print all the multiplication tables with numbers from 1 to 10




// 7. Calculate the sum of even numbers greater than 10 and less than 30
// answer
for (let z = 11; z <= 30; z++) {
    if (z % 2 == 0) {
        document.write("<br>", z, "<br>")
    }

}
// 8 . Create a function that will convert from Celsius to Fahrenheit
// answer 
let fun = function (f) {
    return f * 1.8 + 32;

}
let res = fun(40);
document.write("<br>", res, "<br>")


// 9.Create a function that will convert from Fahrenheit to
//Celsius
// answer 


function convert(c) {
    return (c - 32) / 18;


}
let answer = convert(96);
document.write(answer);

//. 10. Calculate the sum of numbers in an array of numbers;
// answer 
function f() {
    let arr = [1, 2, 3, 4, 5, , 6, 7, 8];
    let sum = arr.reduce((s, c) => {
        return s + c;

    })
    document.write("<br>", sum);
}
f();

// 11. Calculate the average of the numbers in an array of numbers
// answer 
let average = 0;

function ave() {
    let arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let sumaverage = arr2.reduce((a, b) => {
        return a + b / average;

    })
    document.write("<br>", sumaverage, "<br>");

}
ave();
// 12. Create a function that receives an array of numbers as argument and returns an
//array containing only the positive numbers
// answer 

// 13.Find the maximum number in an array of numbers
// answer   
let arr3 = [1, 2, 3, 4, 5];
let maxvalue = arr3.reduce((a, b) => {
    if (a > b) {
        return a

    }
    else if (a < b) {
        return b;
    }
})
document.write(maxvalue);
// 14.  Print the first 10 Fibonacci numbers without recursion
let first = 0;
document.write(first);
let second = 1;
document.write(second);
for (let x = 2; x <= 10; x++) {
    let thrid = first + second;
    document.write(thrid, "<br>")
    first = second;
    second = thrid;
}


// 16.Create a function that will return a Boolean specifying if a number is prime *
// answer 
function primenum() {
    if (x < 2) {
        return false
    }
    else if (x == 0) {
        return true
    }
    prompt("the value is prime", x);
    prompt("the vlaue is not prime", x)
}
primenum();
alert("djffj")

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
// 18. Print the first 100 prime numbers *

//19.Create a function that will return in an array the first “p” prime numbers
//greater than “n”






















