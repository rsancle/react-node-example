export default class UserNotFound extends Error {
    message = "User anot found";
    constructor() {
        super();
        Object.setPrototypeOf(this, UserNotFound.prototype)
    }
}