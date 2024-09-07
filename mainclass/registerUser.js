const jwt = require("jsonwebtoken");
async function addUser(req, schema) {
    const User = schema.user
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const saltRounds = 10
        let passwordhash = ''
        bcrypt.hash(password, saltRounds, function (err, hash) {
            passwordhash = hash
        });
         
        if (!name && passwordhash) throw new Error('Ocorreu um erro ao criar o cadastro')

        const user = new User({
                name,
                email,
                password: passwordhash
         })
        const token = jwt.sign({ _id: user._id }, user, { expiresIn: '12h' });
        const result = await User.save();
        await User.findOneUpdate({_id:result._id},{$set:{token}})

        return result
    }
    catch (err) {

    }
}

module.exports = {
    addUser
}

console.log('Primeira etapa atingida')