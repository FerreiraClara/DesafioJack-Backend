async function taskDelete(req, schema) {

    const Task = schema.task
    
    try{
        const tasksDb = await Task.findOneDelete({_id:req.body._id}).lean()

        return {message:"Tarefa removida"}
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    taskDelete
}