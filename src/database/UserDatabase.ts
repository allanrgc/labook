import { BaseDatabase } from "./BaseDatabase";
import { PostDatabase } from "./PostDatabase";


export class UserDatabase extends BaseDatabase{
    public static TABLE_USERS = "users"

    public async getUsersByName(q: string){
        const usersDB = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where("name", "LIKE", `%${q}%`)

        return usersDB
    }

    public async getAllUsers(){
        const usersDB = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()

        return usersDB
    }

    public async getUsersAndPosts(q: string | undefined){
        let usersDB
        if(q){
            usersDB = await this.getUsersByName(q)
        }else{
            usersDB = await this.getAllUsers()
        }
        const postsDB = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()

        return{
            usersDB,
            postsDB
        }
    }
}