
module.exports = function (mongoose) {
    const Schema = mongoose.Schema

    const taskSchema = new Schema({
        title: String,
        description:String,
        userId:String
    });

    return mongoose.model('Task', taskSchema);
}