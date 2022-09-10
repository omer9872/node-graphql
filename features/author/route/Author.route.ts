import { Router } from "express";

import container from "../../../utils/container";
import { IAuthorController } from "../controller/Author.controller";

const authorRouter = Router();
const authorController = container.get<IAuthorController>("AuthorController");

authorRouter.get("/:id", authorController.getAuthor);
authorRouter.get("/", authorController.getAuthors);
authorRouter.post("/", authorController.createAuthor);

export default authorRouter;