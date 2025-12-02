export { };
interface User {
    readonly _id: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrial(): string;
    getCoupon(name: string, value: number): number;
}

const user: User = {
    _id: 1,
    email: "thebinh@gmail.com",
    userId: 12345,
    startTrial: () => "Trial started",
    getCoupon: (name: "thebinh", off: 20) => off,
    githubToken: "djkhsfkshdkjfhkjs"
}
interface User {
    githubToken: string;
}

interface Admin extends User {
    reoles: "admin" | "user";
}

const admin: Admin = {
    _id: 2,
    email: "kdjhf",
    userId: 54321,
    githubToken: "sdkjfhksjdfh",
    reoles: "user",
    startTrial: () => "Trial started",
    getCoupon: (name: "thebinh", off: 20) => off,
}