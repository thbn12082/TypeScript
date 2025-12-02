function indentity<T>(val: T): T {
    return val;
}

function getProducts<T>(products: [T]): T {
    return products[0];
}

const getMoreSearchProducts = <T,>(products: [T]) => products[0];

function identity<T>(arg: T): T {
    return arg;
}
interface Car {
    brand: string;
    model: string;
}

let myCar = identity<Car>({ brand: "Toyota", model: "Camry" });
console.log(myCar.brand);
console.log(myCar.model);
