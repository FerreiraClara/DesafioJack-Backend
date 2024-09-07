const jwt = require("jsonwebtoken");
async function logOut(){
        const User = schema.user
        const user = await User.findOneUpdate({email}, {$set:{token:null}}).lean()
        return res.json({
            success: true,
            message: "Logout."
        });
}

module.exports = {
    logOut
}