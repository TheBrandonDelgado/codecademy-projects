const express = require('express');
const router = express.Router();
const { create, read, removeToDo } = require('../controller');

router.post('/todo/create', create);
router.get('/todos', read);
router.delete('/todo/:id', removeToDo);

module.exports = router;