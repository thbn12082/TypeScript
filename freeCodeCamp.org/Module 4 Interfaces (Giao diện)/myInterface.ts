export { };
interface Car {
    brand: string;
    wheels: number;
    startEngine(): string;
}

interface SuperCar extends Car {
    nitro: boolean;
}

const ferrari: SuperCar = {
    brand: "Ferrari",
    wheels: 4,
    nitro: true,
    startEngine: () => "Engine started with a roar!",
}