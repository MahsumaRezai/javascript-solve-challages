
//4. Print all the multiplication tables with numbers from 1 to 10

function product(n) {
    for (let i = 1; i <= 10; i++) {
        let row = n + "*" + i + "=" + n * i;
        document.write(row)
    }

} product();

