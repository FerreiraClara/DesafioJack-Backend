const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
async function logIn(req, schema){
    const User = schema.user
    const body = req.body
    const email = body.email
    const password = body.password

    const userDb = await User.find({email}).lean()
    const match = await bcrypt.compare(password, userDb.password); 
    const token = jwt.sign({ _id: userDb._id }, userDb, { expiresIn: '12h' });   
    if (match){
        const user = await User.find({email}, {$set:{token}}).lean()
        return res.json({
            success: true,
            message: "sucesso no login.",
            response: { id: user.id, token: "bearer " + token, user: email.email }
        });
    }
    if (!password) throw new Error('Senha inválida');  

}

module.exports = {
    logIn
}