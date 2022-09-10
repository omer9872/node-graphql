import container from "../../../utils/container";
import { IAuthor } from "../interfaces/Author";
import { IAuthorService } from "../service/Author.service";

const authorService = container.get<IAuthorService>("AuthorService");

const authorGraphQLResolver = {
  Query: {
    getAuthors: async () => {
      return (await authorService.getAuthors()).data;
    },
    getAuthor: async (parent: unknown, args: { id: string }, context: unknown, info: unknown) => {
      return (await authorService.getAuthor(args.id)).data;
    },
  },
  Mutation: {
    createAuthor: async (parent: unknown, args: { input: IAuthor }, context: unknown, info: unknown) => {
      return (await authorService.createAuthor({ ...args.input })).data;
    }
  }
}

export default authorGraphQLResolver;
