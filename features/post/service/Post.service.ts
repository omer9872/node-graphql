import { injectable } from "inversify";
import "reflect-metadata";

import { Types } from "mongoose";

import { DEFAULTS, IResponseResult, Pagination } from "../../../utils/types/http";
import { IPost } from "../interfaces/Post";
import PostModel from "../repository/Post.model";

export interface IPostService {
  getPost: (postId: string) => Promise<IResponseResult<IPost>>
  getPosts: (pagination: Pagination) => Promise<IResponseResult<IPost[]>>
  createPost: (post: IPost) => Promise<IResponseResult<Types.ObjectId>>
}

@injectable()
export class PostService implements IPostService {
  public getPost = async (postId: string) => {
    const data = await PostModel.findOne({ _id: postId });
    return {
      statusCode: 200,
      message: "...",
      data: data
    } as IResponseResult<IPost>;
  };
  public getPosts = async (pagination: Pagination) => {
    const page = pagination.page ?? DEFAULTS.PAGE;
    const count = pagination.count ?? DEFAULTS.COUNT;
    const data = await PostModel.find().limit(page * count);
    return {
      statusCode: 200,
      message: "...",
      data: data.slice((page - 1) * count)
    } as IResponseResult<IPost[]>;
  };
  public createPost = async (post: IPost) => {
    const model = new PostModel(post);
    const result = await model.save();
    return {
      statusCode: 200,
      message: "...",
      data: result._id
    } as IResponseResult<Types.ObjectId>;
  };
}