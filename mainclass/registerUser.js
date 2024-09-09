const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
async function addUser(req, schema) {
    const User = schema.user
    try {
        const name = req.body.name
        const email =String(req.body.email||'').toLowerCase()
        const password = req.body.password
        const saltRounds = 10
        const passwordhash = await bcrypt.hash(password, saltRounds);
         
        if (!name && passwordhash) throw new Error('Ocorreu um erro ao criar o cadastro')

        const user = new User({
                name,
                email,
                password: passwordhash
         })
        console.log(String(user._id))
        const result = await user.save();
        const secretToken = {
            _id: String(result._id),
            email: result.email
        };
        const token = jwt.sign(secretToken, '_id', { expiresIn: '12h' });
        await User.findOneAndUpdate({_id:result._id},{$set:{token:token}})

        return {
            success: true,
            message: "sucesso no login.",
            response: { id: result._id, token: "bearer " + token, email:result.email }
        };
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    addUser
}

console.log('Primeira etapa atingida')