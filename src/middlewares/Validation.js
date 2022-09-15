const TaskModel = require('../model/TaskModel');

const Validation = async (req, res, next) => {

    const { name, quantity } = req.body;

    if(!name) {
        return res.status(400).json({error: 'O nome para criação do estoque é obigatório!'})
    } else if (!quantity){
        return res.status(400).json({error: 'A quantidade é obrigatória!'})
    } else {
        next();
    }


}

module.exports = Validation;