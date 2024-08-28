import { CreatePostController } from "@/controllers/junior/create-post-controller";
import { DeletePostController } from "@/controllers/junior/delete-post-controller";
import { FindAllPostsController } from "@/controllers/junior/find-all-posts-controller";
import { FindOnePostController } from "@/controllers/junior/find-one-post-controller";
import { UpdatePostController } from "@/controllers/junior/update-post-controller";
import { Router } from "express";

const juniorRoutes = Router();

const create = new CreatePostController();
const findAll = new FindAllPostsController();
const findOne = new FindOnePostController();
const update = new UpdatePostController();
const del = new DeletePostController();

juniorRoutes.post("/:profileGithub", create.handle);
juniorRoutes.get("/:profileGithub", findAll.handle);
juniorRoutes.get("/:profileGithub/:id", findOne.handle);
juniorRoutes.patch("/:profileGithub/:id", update.handle);
juniorRoutes.delete("/:profileGithub/:id", del.handle);

export { juniorRoutes };
