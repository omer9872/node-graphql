import container from "../container";
import { IPostService } from "../../features/post/service/Post.service";
import { IPost } from "../../features/post/interfaces/Post";
import { IAuthorService } from "../../features/author/service/Author.service";
import { IAuthor } from "../../features/author/interfaces/Author";

const postService = container.get<IPostService>("PostService");
const authorService = container.get<IAuthorService>("AuthorService");

const insertManyMock = async (length?: number) => {
  const res = await authorService.getAuthors();
  if (res.data.length === 0) {
    await authorService.createAuthor({
      username: "omer9872",
      email: "omer@gmail.com",
      auth: {
        password: "omer1234"
      }
    } as IAuthor)
    const res2 = await authorService.getAuthors();
    Array.from({ length: length ?? 10 }).map((_, index) => {
      return postService.createPost({
        title: `Post ${index + 1}`,
        content: `Post ${index + 1}'s content`,
        createdBy: res2.data[0]._id,
      } as IPost);
    })
  } else {
    Array.from({ length: length ?? 10 }).map((_, index) => {
      return postService.createPost({
        title: `Post ${index + 1}`,
        content: `Post ${index + 1}'s content`,
        createdBy: res.data[0]._id,
      } as IPost);
    })
  }
}

if (process.env.INSERT_MOCK_POSTS === "1") {
  insertManyMock(25);
}
