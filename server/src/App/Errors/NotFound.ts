import httpStatus from "http-status";
import ApplicationError from "./ApplicationError";

export default class NotFound extends ApplicationError {
    statusCode: number = httpStatus.NOT_FOUND;

    serializeErrors() {
        return [{ message: 'Not found' }];
    }

}