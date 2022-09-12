import container from "../../../utils/container";
import { Pagination } from "../../../utils/types/http";
import { IAuthor } from "../interfaces/Author";
import { IAuthorService } from "../service/Author.service";

const authorService = container.get<IAuthorService>("AuthorService");

export const authorGraphQLResolver = {
  Query: {
    getAuthors: async (parent: unknown, args: Pagination, context: unknown, info: unknown) => {
      return (await authorService.getAuthors({ page: args.page, count: args.count })).data;
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
