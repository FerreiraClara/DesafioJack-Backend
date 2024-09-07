const {connection} = require("../service/database")
const jwt = require("jsonwebtoken");
async function addTable(){
   
    const user = `
        CREATE TABLE IF NOT EXISTS USER (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `;

    const task = `
        CREATE TABLE IF NOT EXISTS TASKS (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255),
            userId FOREIGN KEY (id) REFERENCES USER (id)
        )
    `;
    const login = `
    CREATE TABLE IF NOT EXISTS USER (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId FOREIGN KEY (id) REFERENCES USER (id),
        token VARCHAR(255) NOT NULL,
        dateCreated DATE NOT NULL,
        dateExpired VARCHAR(255) NOT NULL
    )
    `;

    connection.query(user)
    connection.query(task)
    connection.query(login)
}

module.exports = {
    addTable
}