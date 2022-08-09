import Character from "../../Domain/Character";
import CharacterRepository from "../../Domain/Persistence/CharactersRepository";
import { getCharacter, getCharacters } from 'rickmortyapi';
import PaginatedCharacters from "../../Domain/PaginatedCharacters";

export default class ApiCharacterRepository implements CharacterRepository {
    async getCharacterById(id: number): Promise<Character> {
        return (await getCharacter(Number(id))).data;
    }

    async allByPage(page = 1): Promise<PaginatedCharacters<Character[]>> {
        return (await getCharacters({ page: page })).data || [];
    }
}