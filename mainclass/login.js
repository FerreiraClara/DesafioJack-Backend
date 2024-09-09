const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
async function logIn(req,schema){
    try{
        const User = schema.user
        const body = req.body
        const email = String(body.email||'').toLowerCase()
        const password = body.password
        if (!password) throw new Error('Senha inválida'); 

        const userDb = await User.findOne({email}).lean()
        const match = await bcrypt.compare(password, userDb.password); 
        const secretToken = {
            _id: String(userDb._id),
            email: userDb.email
        };
        const token = jwt.sign(secretToken, '_id', { expiresIn: '12h' });   
        if (match){
            const user = await User.findOneAndUpdate({_id:userDb._id,email}, {$set:{token:token}}).lean()
            return {
                success: true,
                message: "sucesso no login.",
                response: { id: user._id, token: "bearer " + token, email }
            };
    }
}
    catch(err){
        console.log(err)
        return {
            success: false,
            message: err,
        }
    }

}

module.exports = {
    logIn
}