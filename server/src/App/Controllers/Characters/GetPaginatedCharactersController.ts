import { Request, Response } from 'express';
import { OK } from 'http-status';
import { ListCharacters } from '../../../Context/Characters/Application/ListCharacters';
import ApiCharacterRepository from '../../../Context/Characters/Infrastructure/Persistence/ApiCharacterRepository';
import NotFound from '../../Errors/NotFound';
import charactersRepositoryProvider from '../../Providers/CharactersRepositoryProvider';

export default class GetPaginatedCharactersController {
    private action;
    constructor() {
        this.action = new ListCharacters(charactersRepositoryProvider);
    }
    async run({ query }: Request, res: Response) {
        const page: any = query.page;
        const characters = await this.action.run(page);
        return res.status(OK).send(characters);
    }
}