const formidable = require('formidable');
const { create, get, remove } = require('../model/todo');

exports.create = async (req, res) => {
  const form = formidable();
  form.keepExtensions = true;
  form.parse(req, async (err, fields) => {
    const { description } = fields;
    if (!description) {
      return res.status(400).json({ error: 'Description is required' });
    }

    try {
        const todo = await create(description);
        return res.status(201).send({ data: todo.rows[0] });
    } catch (error) {
        res.status(400).json({ error });
    }
  });
};

exports.read = async (req, res) => {
    try {
        const todos = await get();
        return res.status(200).send({ data: todos });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.removeToDo = async (req, res) => {
    const id = Number(req.params.id);
    try {
        await remove(id);
        return res.status(200).send({ data: id });
    } catch (error) {
        res.status(400).json({ error });
    }
};