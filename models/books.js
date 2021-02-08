const db = require('./conn.js');

class Books {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM books;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async getBookData() {
        try {
            const query = `SELECT * FROM books WHERE id = ${this.id}`;
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

}

module.exports = Books;
