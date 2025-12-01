export { }
let data: (string | number)[] = [];
data.push(1);
data.push("2");

enum UserRole {
    ADMIN,
    GUEST,
    SUPER_ADMIN
}

function getDbId(id: number | string) {
    if (typeof id === "string") {
        console.log(`Admin ID: ${id}`);
    } else {
        console.log(`User ID: ${id}`);
    }
}