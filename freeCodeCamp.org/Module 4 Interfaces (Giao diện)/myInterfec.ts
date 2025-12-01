export { };
interface Car {
    brand: string;
    wheels: number;
    startEngine(): string;
}

interface SuperCar extends Car {
    nitro: boolean;
}