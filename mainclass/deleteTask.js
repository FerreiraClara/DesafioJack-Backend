async function taskDelete(id) {

    const deleteQuery = 'DELETE FROM tasks WHERE id = ?';

    try {
        const [result] = await connection.execute(deleteQuery, [id]);
        console.log('Tarefa removida:', result);

        return {message:"Tarefa removida"}
    } catch (error) {
        console.error('Erro ao remover tarefa:', error);
    }

}

module.exports = {
    taskDelete
}