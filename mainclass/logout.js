const jwt = require("jsonwebtoken");
async function logOut(req, schema){
        const User = schema.user
        const email = req.decoded.email
        const user = await User.findOneAndUpdate({email}, {$set:{token:null}}).lean()
        return {
            success: true,
            message: "Logout."
    }
}

module.exports = {
    logOut
}