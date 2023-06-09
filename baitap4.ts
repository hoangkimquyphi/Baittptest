function tongthSum(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
const n = 20;
const sum = tongthSum(n);

console.log(`Tổng các số từ 1 đến ${n} là ${sum}`);