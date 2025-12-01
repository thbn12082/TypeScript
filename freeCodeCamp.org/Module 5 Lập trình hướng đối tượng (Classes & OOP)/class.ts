export { };
class User {
    constructor(private email: string) { }
    get emailAddress(): string {
        return this.email;
    }
    set emailAddress(newEmail: string) {
        this.email = newEmail;
    }
}
