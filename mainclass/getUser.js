const jwt = require("jsonwebtoken");
async function dataUser(req,schema) {

    const User = schema.user
    try{
        const userDb = await User.findOne({_id:req.body._id}).lean()

        return userDb
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    dataUser
}