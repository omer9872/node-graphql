import { injectable } from "inversify";
import "reflect-metadata";

import { Types } from 'mongoose';
import { DEFAULTS, IResponseResult, Pagination } from "../../../utils/types/http";
import { IAuthor } from "../interfaces/Author";
import AuthorModel from "../repository/Author.model";

export interface IAuthorService {
  getAuthor: (authorId: string) => Promise<IResponseResult<IAuthor>>
  getAuthors: (pagination: Pagination) => Promise<IResponseResult<IAuthor[]>>
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
  public getAuthors = async (pagination: Pagination) => {
    const page = pagination.page ?? DEFAULTS.PAGE;
    const count = pagination.count ?? DEFAULTS.COUNT;
    const data = await AuthorModel.find().limit(page * count);
    return {
      statusCode: 200,
      message: "...",
      data: data.slice((page - 1) * count)
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