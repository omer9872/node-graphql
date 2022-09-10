import container from "../container";
import { IAuthorService } from "../../features/author/service/Author.service";
import { IAuthor } from "../../features/author/interfaces/Author";

const authorService = container.get<IAuthorService>("AuthorService");

const insertManyMock = (length?: number) => {
  Array.from({ length: length ?? 10 }).map((_, index) => {
    return authorService.createAuthor({
      username: `omer_${index + 1}`,
      email: `omer_${index + 1}@gmail.com`,
      auth: {
        password: `omer1234_${index + 1}`
      }
    } as IAuthor);
  })
}

if (process.env.INSERT_MOCK_AUTHORS === "1") {
  insertManyMock(2);
}
