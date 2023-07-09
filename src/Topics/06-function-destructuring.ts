interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// si sabemos que retornará un arreglo con dos elementos mejor dejar :[number, number]
function taxCalculation(options: TaxCalculationOptions): [number, number] {
  const { tax, products } = options;
  let total = 0;
  //   destructurar del producto sacando solo el price
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

// destructurando el resultado en dos variables
const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: tax });

console.log("total: ", total);
console.log("tax: ", taxTotal);
export {};
