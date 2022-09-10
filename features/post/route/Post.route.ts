import { Router } from "express";

import container from "../../../utils/container";
import { IPostController } from "../controller/Post.controller";

const postRouter = Router();
const postController = container.get<IPostController>("PostController");

postRouter.get("/:id", postController.getPost);
postRouter.get("/", postController.getPosts);
postRouter.post("/", postController.createPost);

export default postRouter;