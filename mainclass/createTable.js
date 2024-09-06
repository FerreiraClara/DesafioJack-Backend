const {connection} = require("../service/database")

async function addTable(){
   
    const user = `
        CREATE TABLE IF NOT EXISTS USUARIOS (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `;

    const task = `
        CREATE TABLE IF NOT EXISTS TASK (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255),
            userId FOREIGN KEY (id) REFERENCES USUARIOS (id)
        )
    `;
    const login = `
    CREATE TABLE IF NOT EXISTS USUARIOS (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId FOREIGN KEY (id) REFERENCES USUARIOS (id),
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