function calculateSum(arrayA: number[]): number {
    let sum = 0;
    for (let i = 0; i < arrayA.length; i++) {
      sum += arrayA[i];
    }
    return sum;
  }
  const arrayA = [5, 1, 9, 3, 7];
const sum = calculateSum(arrayA);
console.log(`Tổng các phần tử trong mảng là ${sum}`);
  
