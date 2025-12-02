export { };
enum ProductStatus {
    IN_STOCK, OUT_OF_STOCK, DISCONTINUED
}

interface Product {
    readonly id: number;
    name: string;
    price: number,
    status: ProductStatus
}

class InventoryManager {
    constructor(private products: Product[]) { }

    addProduct(item: Product): void {
        this.products.push(item);
    }

    getProductsByStatus(status: ProductStatus): Product[] {
        let res = this.products.filter(x => x.status === status);
        return res;
    }
    removeProduct(id: number): void {
        this.products = this.products.filter(product => product.id != id);
    }
    updatePrice(id: number, newPrice: number): string {
        let product = this.products.find(x => x.id === id);
        if (product) {
            product.price = newPrice;
            return "Updated successfully";
        }
        return "Product not found";
    }

}

class Container<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
    removeLast(): void {
        this.items.pop();
    }
}

const product: Product = {
    id: 1,
    name: "samsung",
    price: 3874293,
    status: ProductStatus.IN_STOCK
}
const productContainer = new Container<Product>();
productContainer.add(product);


const numberContainer = new Container<Number>();
numberContainer.add(10);
numberContainer.add(20);

abstract class Employee {
    constructor(private id: string, private name: string) { }
    getDetails(): string {
        return `Employee: ${this.name},ID: ${this.id}`;
    }
    abstract calculateSalary(): number;
}

class FullTimeEmployee extends Employee {
    constructor(id: string, name: string, private salary: number) {
        super(id, name);
    }
    calculateSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(id: string, name: string, private hourlyRate: number, private hoursWorked: number) {
        super(id, name);
    }
    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

let fullTimeEmployee = new FullTimeEmployee("1", "thebinh", 123);
let partTimeEmployee = new PartTimeEmployee("2", "VanHien", 0.12, 36);

console.log(fullTimeEmployee.getDetails() + " với lương là : " + fullTimeEmployee.calculateSalary());
console.log(partTimeEmployee.getDetails() + " với lương là: " + partTimeEmployee.calculateSalary());

