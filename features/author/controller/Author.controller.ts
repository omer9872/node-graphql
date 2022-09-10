import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Request, Response } from 'express';
import { AuthorService } from "../service/Author.service";
import { IAuthor } from "../interfaces/Author";

export interface IAuthorController {
  getAuthor: (req: Request, res: Response) => void
  getAuthors: (req: Request, res: Response) => void
  createAuthor: (req: Request, res: Response) => void
}

@injectable()
export class AuthorController implements IAuthorController {

  _authorService: AuthorService;

  public constructor(
    @inject("AuthorService") authorService: AuthorService,
  ) {
    this._authorService = authorService;
  }

  public getAuthor = async (req: Request, res: Response) => {
    const response = await this._authorService.getAuthor(req.params.id)
    return res.status(response.statusCode).send(response);
  };
  public getAuthors = async (req: Request, res: Response) => {
    const response = await this._authorService.getAuthors()
    return res.status(response.statusCode).send(response);
  };
  public createAuthor = async (req: Request, res: Response) => {
    const response = await this._authorService.createAuthor(req.body as IAuthor)
    return res.status(response.statusCode).send(response);
  };
}