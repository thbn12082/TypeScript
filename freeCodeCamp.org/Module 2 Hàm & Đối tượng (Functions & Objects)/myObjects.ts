export { };
type SmartPhone = {
    brand: string,
    price: number,
    os: string,
    is5G?: boolean,
    readonly _imei: string
}

function printPhoneInfo(phone: SmartPhone): void {
    console.log("Brand: " + phone.brand);
    console.log("Price: " + phone.price);
    console.log("Operating System: " + phone.os);
    if (phone.is5G !== undefined) {
        console.log("5G Support: " + (phone.is5G ? "Yes" : "No"));
    }
    console.log("IMEI: " + phone._imei);
}