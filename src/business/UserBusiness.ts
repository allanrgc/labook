import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/Users"


export class UserBusiness{
    constructor(
        private userDatabase: UserDatabase
    ){}

    public async getUsers(q: string | undefined): Promise<User[]>{
        const {usersDB, postsDB} = await this.userDatabase.getUsersAndPosts(q)

        const users = usersDB.map((userDB) => {
            const user = new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,
                userDB.role,
                userDB.created_at,
                getPost(userDB.creator_id)
            )
            return user
        })

        function getPost(creatorId: string){
            const post = postsDB.find((postDB) => postDB.id === creatorId)
            return post
        }
        
        if(!usersDB){
        throw new Error("Nenhum usuário encontrado")
        }

        return users
    }

    
}