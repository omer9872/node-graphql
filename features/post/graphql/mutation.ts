import container from "../../../utils/container";
import { Pagination } from "../../../utils/types/http";
import { IPost } from "../interfaces/Post";
import { IPostService } from "../service/Post.service";

const postService = container.get<IPostService>("PostService");

export const postGraphQLResolver = {
  Query: {
    getPosts: async (parent: unknown, args: Pagination, context: unknown, info: unknown) => {
      const res = await postService.getPosts({ page: args.page, count: args.count })
      return res.data
    },
    getPost: async (parent: unknown, args: { id: string }, context: unknown, info: unknown) => {
      const res = await postService.getPost(args.id);
      return res.data
    },
  },
  Mutation: {
    createPost: async (parent: unknown, args: { input: IPost }, context: unknown, info: unknown) => {
      return (await postService.createPost({ ...args.input })).data;
    }
  }
}
