import { Container } from "inversify";

import { AuthorController, IAuthorController } from "../features/author/controller/Author.controller";
import { AuthorService, IAuthorService } from "../features/author/service/Author.service";

import { PostController, IPostController } from "../features/post/controller/Post.controller";
import { PostService, IPostService } from "../features/post/service/Post.service";

const container = new Container();

container.bind<IAuthorService>("AuthorService").to(AuthorService);
container.bind<IAuthorController>("AuthorController").to(AuthorController);

container.bind<IPostService>("PostService").to(PostService);
container.bind<IPostController>("PostController").to(PostController);

export default container;