import { PostDatabase } from "../database/PostDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { Post } from "../models/Posts";


export class PostBusiness{
    constructor(
        private postDatabase: PostDatabase,
        private userDatabase: UserDatabase
    ){}
    public async getPosts(){
        const postsDB = await this.postDatabase.getPosts()

        const posts = postsDB.map((postDB) => {
            const post = new Post(
                postDB.post_id,
                postDB.creator_id,
                postDB.content,
                postDB.likes,
                postDB.dislikes,
                postDB.created_at,
                postDB.updated_at
            )
            return post
        })

        if(!posts){
            throw new Error ("post não existe")
        }
        return posts
    }
}