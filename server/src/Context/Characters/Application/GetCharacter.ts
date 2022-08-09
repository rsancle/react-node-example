import CharacterRepository from "../Domain/Persistence/CharactersRepository";

export class GetCharacter {
    constructor(private charactersRepository: CharacterRepository) { }

    async run(id: number) {
        const pagination = await this.charactersRepository.getCharacterById(id);
        return pagination;
    }
}