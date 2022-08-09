import Jsonable from "../../Shared/Domain/Jsonable";

export default class User implements Jsonable {
    readonly id: string;
    readonly email: string;
    readonly password: string;
    readonly favoriteCharacters: number[];

    constructor(id: string, email: string, password: string, favoriteCharacters: number[] = []) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.favoriteCharacters = favoriteCharacters;
    }

    static createFromJson(json: { id: string, email: string, password: string, favoriteCharacters?: number[] }): User {
        return User.create(
            json.id,
            json.email,
            json.password,
            json.favoriteCharacters || []
        );
    }
    public toJson(): any {
        return {
            id: this.id,
            email: this.email,
            password: this.password,
            favoriteCharacters: this.favoriteCharacters
        };
    }

    static create(
        id: string,
        email: string,
        password: string,
        favoriteCharacters: number[] = []
    ): User {
        const user = new User(id, email, password, favoriteCharacters);

        return user;
    }
}