function listTask(req){
    try{
        const sql = `SELECT * from TASKS where userId = ?`
        const value = [req.decoded.user]
        const [result] =  connect.execute(sql, value)

        const tasks = result.map((task)=> {
            return {
                id:task.id,
                title:task.title,
                description: task.description
            }
        })

        return tasks
    }
    catch(error){

    }
}

module.exports = {
    listTask
}