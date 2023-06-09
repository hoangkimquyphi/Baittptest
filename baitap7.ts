const animals = [
    {
        name: "cat",
        size: "small",
        weight: 5
    },
    {
        name: "dog",
        size: "small",
        weight: 10
    },
    {
        name: "lion",
        size: "medium",
        weight: 150
    },
    {
        name: "elephant",
        size: "big",
        weight: 5000
    }
];

const animalsNames: string[] = animals.map(animal => animal.name);

console.log("-mảng chứa tên các đỘng vật", animalsNames); 

const weightAnimals: typeof animals = animals.filter(animal => animal.weight < 150);

console.log("-mảng lọc các động vật có cân nặng dưới 150", weightAnimals);

const totalWeight: number = animals.reduce((sum, animal)=>sum+animal.weight,0);

console.log("-tổng cân nặng của tất cả các con vật", totalWeight);


const totalWeightAnimals: number = animals
  .filter(animal => animal.weight < 150)
  .reduce((sum, animal) => sum + animal.weight, 0);

console.log("tổng cân nặng của tất cả các con vật có cân nặng dưới 150", totalWeightAnimals);
