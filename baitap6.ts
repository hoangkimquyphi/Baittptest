function getTotalSalary(salaries: {[key: string]: number}): number {
    let sum: number = 0;
    for (let key in salaries) {
      sum += salaries[key];
    }
    return sum;
  }
  const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  const totalSalary = getTotalSalary(salaries);
  console.log(`Tổng lương của các người là ${totalSalary}`);