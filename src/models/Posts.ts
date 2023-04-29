export class Post{
    constructor(
        private id: string,
        private creator_id: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private created_at: string,
        private updated_at: string
    ){}

    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    public getCreatorid(): string {
        return this.creator_id;
    }
    public setCreator_id(value: string) {
        this.creator_id = value;
    }
    public getContent(): string {
        return this.content;
    }
    public setContent(value: string) {
        this.content = value;
    }
    public getLikes(): number {
        return this.likes;
    }
    public setLikes(value: number) {
        this.likes = value;
    }
    public getDislikes(): number {
        return this.dislikes;
    }
    public setDislikes(value: number) {
        this.dislikes = value;
    }
    public getCreatedat(): string {
        return this.created_at;
    }
    public setCreated_at(value: string) {
        this.created_at = value;
    }
    public getUpdated_at(): string {
        return this.updated_at;
    }
    public setUpdated_at(value: string) {
        this.updated_at = value;
    }
    
}