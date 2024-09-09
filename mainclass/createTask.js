async function addTask(req, schema){
    const User = schema.user
    const Task = schema.task
    const body = req.body
    const title = body.title
    const description = body.description

    try {
        if(!title) throw new Error('Não informado o titulo')
        const userDb = await User.findOne({_id:req.decoded._id}).lean()
        
        const task = new Task({
            title,
            description,
            userId: String(userDb._id)
        })
        const result = await task.save()
        console.log('Dados inseridos:', result);

        return result
        
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    addTask
}