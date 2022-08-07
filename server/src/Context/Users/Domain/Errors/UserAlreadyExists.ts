export default class UserAlreadyExists extends Error {
    message = "User already exists";
    constructor() {
        super();
        Object.setPrototypeOf(this, UserAlreadyExists.prototype)
    }
}