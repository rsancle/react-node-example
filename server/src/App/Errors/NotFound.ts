import httpStatus from "http-status";
import ApplicationError from "./ApplicationError";

export default class NotFound extends ApplicationError {
    statusCode = httpStatus.NOT_FOUND;
    constructor() {
        super();
        Object.setPrototypeOf(this, NotFound.prototype)
    }
    serializeErrors() {
        return [{ message: 'Not found' }];
    }

}