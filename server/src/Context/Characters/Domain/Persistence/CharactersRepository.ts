
import Character from '../Character';
import PaginatedCharacters from '../PaginatedCharacters';

export default interface CharacterRepository {
    allByPage(page: number): Promise<PaginatedCharacters<Character[]>>;
    getCharacterById(id: number): Promise<Character>;
}