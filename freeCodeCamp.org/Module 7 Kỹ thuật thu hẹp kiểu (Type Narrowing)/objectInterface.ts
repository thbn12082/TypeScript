interface User {
    name: string; email: string;
}
interface Admin {
    name: string; email: string; isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return "Đây là tài khaonr ADMIN";
    } else {
        return "Đây là tài khoản USER";
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        return x.toUTCString();
    } else {
        return x.toUpperCase();
    }
}

