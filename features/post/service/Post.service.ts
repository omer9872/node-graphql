import { injectable } from "inversify";
import "reflect-metadata";

import { IResponseResult } from "../../../utils/types/response";
import { IPost } from "../interfaces/Post";
import PostModel from "../repository/Post.model";


export interface IPostService {
  getPost: (postId: string) => Promise<IResponseResult<IPost>>
  getPosts: () => Promise<IResponseResult<IPost[]>>
  createPost: (post: IPost) => Promise<IResponseResult<undefined>>
}

@injectable()
export class PostService implements IPostService {
  public getPost = async (postId: string) => {
    const data = await PostModel.findOne({ _id: postId });
    return {
      statusCode: 200,
      message: "",
      data: data
    } as IResponseResult<IPost>;
  };
  public getPosts = async () => {
    const data = await PostModel.find();
    return {
      statusCode: 200,
      message: "",
      data: data
    } as IResponseResult<IPost[]>;
  };
  public createPost = async (post: IPost) => {
    const model = new PostModel(post);
    await model.save();
    return {
      statusCode: 200,
      message: "",
      data: undefined
    } as IResponseResult<undefined>;
  };
}