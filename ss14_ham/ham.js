function isPrime(number) {
    for (let i = 0; i < number; i++) {
        let count = 0;
        if (i >= 2) {
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) {
                    count++;
                }
            }
            if (count === 2) {
                document.write(i + "<br>");
            }
        }
    }
}