import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase{
    public static TABLE_POSTS = "posts"

    public async getPosts(){
        const postsDB = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)

        return postsDB
    }

    public async getPostsById(id: string){
        const [postDB] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select(
            "posts.*",
            "users.id AS userId",
            "users.name",
            "users.email",
            "users.role",
            "users.created_at",
        )
        .from(PostDatabase.TABLE_POSTS)
        .where("posts.post_id", "=", id)
        .innerJoin("users", "posts.creator_id","=","users.id")
    }
}