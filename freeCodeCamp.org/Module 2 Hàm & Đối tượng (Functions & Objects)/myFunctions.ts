export { };
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(5, 10));

function getUpperCaseString(str: String): String {
    return str.toUpperCase();
}
console.log(getUpperCaseString("hello world"));

function consoleError(message: String): void {
    console.error("Error: " + message);
}

function handleError(message: string): never {
    throw new Error(message);
}

// thay vì viết thế này
function createUser(user: { name: string, age: number }) {
}

// ta thay bằng cách viết này
type User = {
    name: string,
    age: number,
    isActive: boolean
}
function createUser2(user: User): User {
    return { name: user.name, age: user.age, isActive: user.isActive };
}


type UserDetails = {
    readonly _id: number,
    username: string,
    email: string,
    isAdmin?: boolean
}

let myUser: UserDetails = {
    _id: 1,
    username: "ginnoginno",
    email: "thebinh",
}
myUser.email = "thebinh@gmail.com";
// myUser._id = 5; // lỗi vì _id là readonly

