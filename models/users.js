const { response } = require('express');
const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    static async addUser(first_name, last_name, email, password) {
        try {
            const query = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${first_name}', '${last_name}', '${email}', '${password}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = User;