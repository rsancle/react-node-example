import httpStatus from "http-status";
import ApplicationError from "./ApplicationError";

export default class Unauthorized extends ApplicationError {
    statusCode = httpStatus.UNAUTHORIZED;
    constructor() {
        super();
        Object.setPrototypeOf(this, Unauthorized.prototype)
    }
    serializeErrors() {
        return [{ message: 'Unauthorized' }];
    }

}