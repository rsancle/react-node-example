export default abstract class ApplicationError extends Error {
    abstract statusCode: number;
    constructor() {
        super();
        Object.setPrototypeOf(this, ApplicationError.prototype)
    }
    abstract serializeErrors(): {
        message: string;
        field?: string;
    }[];
}