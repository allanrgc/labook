import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"


export class UserController{
    constructor(
        private userBusiness: UserBusiness
    ){}

    public getUsers = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined

            const output = await this.userBusiness.getUsers(q)

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