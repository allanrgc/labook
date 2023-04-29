import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";


export class PostController{
    constructor(
        private postBusiness: PostBusiness
    ){}
    public getPosts = async (req: Request, res: Response) => {
        try {
            const output = await this.postBusiness.getPosts()

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if(error instanceof Error){
                res.status(500).send(error.message)
            }else{
                res.status(500).send("Erro inesperado")
            }
        }
    }
}