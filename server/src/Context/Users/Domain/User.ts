import Jsonable from "../../Shared/Domain/Jsonable";

export default class User implements Jsonable {
    readonly id: string;
    readonly email: string;
    readonly password: string;

    constructor(id: string, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    static createFromJson(json: { id: string, email: string, password: string }): User {
        return User.create(
            json.id,
            json.email,
            json.password
        );
    }
    public toJson(): any {
        return {
            id: this.id,
            email: this.email,
            password: this.password
        };
    }

    static create(
        id: string,
        email: string,
        password: string
    ): User {
        const user = new User(id, email, password);

        return user;
    }
}