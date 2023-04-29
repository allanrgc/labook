export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: string,
        private created_at: string,
        private post: {
            id: string;
            creator_id: string;
            content: string;
            likes: number;
            dislikes: number;
            created_at: string;
            updated_at: string;
        }
    ){}

    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }

    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }

    public getPassword(): string {
        return this.password;
    }
    public setPassword(value: string) {
        this.password = value;
    }

    public getRole(): string {
        return this.role;
    }
    public setRole(value: string) {
        this.role = value;
    }

    public getCreatedat(): string {
        return this.created_at;
    }
    public setCreated_at(value: string) {
        this.created_at = value;
    }

    public getPost(): {
        id: string;
        creator_id: string;
        content: string;
        likes: number;
        dislikes: number;
        created_at: string;
        updated_at: string;
    } {
        return this.post;
    }
    public setPost(value: {
        id: string;
        creator_id: string;
        content: string;
        likes: number;
        dislikes: number;
        created_at: string;
        updated_at: string;
    }) {
        this.post = value;
    }
    
}