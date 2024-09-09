async function taskDelete(req, schema) {

    const Task = schema.task
    const body = req.body

    try{
        const tasksDb = await Task.deleteMany({_id:{$in:body}}).lean()

        return {message:"Tarefa removida"}
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    taskDelete
}