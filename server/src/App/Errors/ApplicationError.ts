export default abstract class ApplicationError extends Error {
    abstract statusCode: number;

    abstract serializeErrors(): {
        message: string;
        field?: string;
    }[];

}