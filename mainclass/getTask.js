async function listTask(req,schema){
    const Task = schema.task
    try{
        const tasksDb = await Task.find({userId:String(req.decoded._id)}).lean()

        return {
            success: true,
            message: "sucesso no login.",
            response: tasksDb
        };
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    listTask
}