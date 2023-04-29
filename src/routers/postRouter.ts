import express from "express"
import { PostController } from "../controller/PostController"
import { PostBusiness } from "../business/PostBusiness"
import { PostDatabase } from "../database/PostDatabase"
import { UserDatabase } from "../database/UserDatabase"

export const postRouter = express.Router()

export const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new UserDatabase()
        )
)

postRouter.get("/", postController.getPosts)