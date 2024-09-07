async function listTask(req,schema){
    const Task = schema.task
    try{
        const tasksDb = await Task.find({userId:req.body.userId}).lean()

        return tasksDb
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    listTask
}