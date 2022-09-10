import { injectable } from "inversify";
import "reflect-metadata";

import { Types } from 'mongoose';
import { IResponseResult } from "../../../utils/types/response";
import { IAuthor } from "../interfaces/Author";
import AuthorModel from "../repository/Author.model";

export interface IAuthorService {
  getAuthor: (authorId: string) => Promise<IResponseResult<IAuthor>>
  getAuthors: () => Promise<IResponseResult<IAuthor[]>>
  createAuthor: (author: IAuthor) => Promise<IResponseResult<Types.ObjectId>>
}

@injectable()
export class AuthorService implements IAuthorService {
  public getAuthor = async (authorId: string) => {
    const data = await AuthorModel.findOne({ _id: authorId });
    return {
      statusCode: 200,
      message: "...",
      data: data
    } as IResponseResult<IAuthor>;
  };
  public getAuthors = async () => {
    const data = await AuthorModel.find();
    return {
      statusCode: 200,
      message: "...",
      data: data
    } as IResponseResult<IAuthor[]>;
  };
  public createAuthor = async (author: IAuthor) => {
    const model = new AuthorModel(author);
    const result = await model.save();
    return {
      statusCode: 200,
      message: "...",
      data: result._id
    } as IResponseResult<Types.ObjectId>;
  };
}