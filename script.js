function fibonacciSeries(n) {
        let fibbSeries = [0, 1];

        for (let i = 2; i < n; i++) {
                fibbSeries[i] = fibbSeries[i - 1] + fibbSeries[i - 2];
        }

        return fibbSeries;
}

const n = 10; // Change the value of n to generate different number of Fibonacci numbers
const fibbSeries = fibonacciSeries(n);
console.log(fibbSeries);
