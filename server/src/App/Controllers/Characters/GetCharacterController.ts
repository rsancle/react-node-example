import { Request, Response } from 'express';
import { OK } from 'http-status';
import { GetCharacter } from '../../../Context/Characters/Application/GetCharacter';
import charactersRepositoryProvider from '../../Providers/CharactersRepositoryProvider';

export default class GetPaginatedCharactersController {
    private action;
    constructor() {
        this.action = new GetCharacter(charactersRepositoryProvider);
    }
    async run({ params }: Request, res: Response) {
        const id: any = params.id;
        const characters = await this.action.run(id);
        return res.status(OK).send(characters);
    }
}