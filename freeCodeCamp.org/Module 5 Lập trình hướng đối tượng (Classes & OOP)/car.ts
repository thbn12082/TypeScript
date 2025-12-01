export { };
class Car {
    constructor(public brand: string, private _vinNumber: string) {
    }
    get getVin(): string {
        return this._vinNumber;
    }
}
const myCar = new Car("Toyota", "1HGBH41JXMN109186");
console.log(myCar.getVin);