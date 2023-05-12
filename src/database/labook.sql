-- Active: 1682703872042@@127.0.0.1@3306
CREATE TABLE users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT('NORMAL') NOT NULL,
        created_at TEXT DEFAULT(DATETIME('now', 'localtime')) NOT NULL
    );
SELECT * FROM users;
CREATE TABLE posts(
        post_id TEXT PRIMARY KEY UNIQUE NOT NULL,
        creator_id TEXT NOT NULL,
        content TEXT,
        likes INTEGER DEFAULT(0) NOT NULL,
        dislikes INTEGER DEFAULT(0) NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT,
        FOREIGN KEY (creator_id) REFERENCES users(id)
    );

CREATE TABLE likes_dislikes(
        user_id TEXT NOT NULL,
        post_id TEXT NOT NULL,
        like INTEGER DEFAULT(0) NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(post_id) REFERENCES posts(post_id)
    );

INSERT INTO users (id, name, email, password, role)
VALUES
("u001","Maria","maria@gmail.com","senha123","NORMAL"),
("u002","Madalena","madalena@gmail.com","123senha","NORMAL"),
("u003","Rafael","rafaeladm@gmail.com","nemtente123","ADMIN");

