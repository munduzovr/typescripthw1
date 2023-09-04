//task1
let a:number = 100;
let b:string = 'rus'
let c:boolean = false;
console.log(a,b,c);

function calculateArea(radius:number){
    
    let pi:number = 3.14;
    let area:number = pi*(radius*radius);
    return area;

}

console.log(calculateArea(2));

function calculateDensity(mass:number,volume:number){
    let p:number= mass/volume;
    return p;
}

console.log(calculateDensity(12,3))

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    colors: string[];
  };
  
  const products: Product[] = [
    {
      id: 1,
      title: "Продукт 1",
      description: "Описание продукта 1",
      price: 19.99,
      colors: ["Красный", "Синий"],
    },
    {
      id: 2,
      title: "Продукт 2",
      description: "Описание продукта 2",
      price: 29.99,
      colors: ["Зеленый", "Черный"],
    },
    {
      id: 3,
      title: "Продукт 3",
      description: "Описание продукта 3",
      price: 9.99,
      colors: ["Желтый", "Белый"],
    },
  ];
  
  console.log(products);
  