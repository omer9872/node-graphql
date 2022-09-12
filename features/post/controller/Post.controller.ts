import { injectable, inject } from "inversify";
import "reflect-metadata";

import { Request, Response } from 'express';
import { PostService } from "../service/Post.service";
import { IPost } from "../interfaces/Post";

export interface IPostController {
  getPost: (req: Request, res: Response) => void
  getPosts: (req: Request, res: Response) => void
  createPost: (req: Request, res: Response) => void
}

@injectable()
export class PostController implements IPostController {

  _postService: PostService;

  public constructor(
    @inject("PostService") postService: PostService,
  ) {
    this._postService = postService;
  }

  public getPost = async (req: Request, res: Response) => {
    const response = await this._postService.getPost(req.params.id)
    return res.status(response.statusCode).send(response);
  };
  public getPosts = async (req: Request, res: Response) => {
    const response = await this._postService.getPosts(req.params)
    return res.status(response.statusCode).send(response);
  };
  public createPost = async (req: Request, res: Response) => {
    const response = await this._postService.createPost(req.body as IPost)
    return res.status(response.statusCode).send(response);
  };
}