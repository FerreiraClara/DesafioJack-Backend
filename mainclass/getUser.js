const jwt = require("jsonwebtoken");
async function dataUser(req) {

    try{
        const sql = `SELECT * from USER where id = ?`
        const value = [req.decoded.user]
        const [result] = connect.execute(sql, value)

        const users = result.map((user)=> {
            return {
                id: user.id,
                name: user.name,
                email: task.email,
                password: task.password
            }
        })

        return users
    }
    catch(error){

    }
}

module.exports = {
    dataUser
}