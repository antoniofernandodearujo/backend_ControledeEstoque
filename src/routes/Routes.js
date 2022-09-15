const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController')
const Validation = require('../middlewares/Validation');

router.post('/', Validation, TaskController.create);
router.put('/edit/:id', TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/remove/:id', TaskController.delete);

router.get('/filter/all', TaskController.all);


module.exports = router;