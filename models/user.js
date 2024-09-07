module.exports = function (mongoose) {
    const Schema = mongoose.Schema
    const userSchema = new Schema({
    email: String,
    password:String,
    token:String
    });
    return mongoose.model('User', userSchema);
}