import Character from "../../Domain/Character";
import CharacterRepository from "../../Domain/Persistence/CharactersRepository";
import { getCharacters } from 'rickmortyapi';
import PaginatedCharacters from "../../Domain/PaginatedCharacters";

export default class ApiCharacterRepository implements CharacterRepository {

    async allByPage(page = 1): Promise<PaginatedCharacters<Character[]>> {
        return (await getCharacters({ page: page })).data || [];
    }
}