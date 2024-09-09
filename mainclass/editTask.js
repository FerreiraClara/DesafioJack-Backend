
const { ObjectId } = require('mongodb');
async function taskEdit(req, schema){
    const Task = schema.task
    const body = req.body
    const title = body.title
    const _id = new ObjectId(body._id)
    const description = body.description

    try {
        const result = await Task.findOneAndUpdate({_id: _id},
            {
            $set:{
                title,
                description
            }
        }).lean()
        console.log('Dados inseridos:', result);

        return result;

    } catch (error) {
        console.error('Erro ao inserir dados');
    }
}

module.exports = {
    taskEdit
}