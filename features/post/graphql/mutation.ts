import container from "../../../utils/container";
import { IPost } from "../interfaces/Post";
import { IPostService } from "../service/Post.service";

const postService = container.get<IPostService>("PostService");

const postGraphQLResolver = {
  Query: {
    getPosts: async () => {
      return (await postService.getPosts()).data;
    },
    getPost: async (parent: unknown, args: { id: string }, context: unknown, info: unknown) => {
      return (await postService.getPost(args.id)).data;
    },
  },
  Mutation: {
    createPost: async (parent: unknown, args: { input: IPost }, context: unknown, info: unknown) => {
      return (await postService.createPost({ ...args.input })).data;
    }
  }
}

export default postGraphQLResolver;
