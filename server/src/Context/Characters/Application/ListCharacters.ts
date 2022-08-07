import CharacterRepository from "../Domain/Persistence/CharactersRepository";



export class ListCharacters {
    constructor(private charactersRepository: CharacterRepository) { }

    async run(page: number = 1) {
        const pagination = await this.charactersRepository.allByPage(page);
        return pagination;
    }
}