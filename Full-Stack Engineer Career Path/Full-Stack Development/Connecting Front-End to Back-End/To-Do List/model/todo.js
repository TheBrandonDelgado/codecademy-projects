const pool = require('./database');

const create = async (description) => {
  const query = 'INSERT INTO todo (description) VALUES ($1) RETURNING *';
  const result = await pool.query(query, [description]);
  return result.rows[0];
};

const get = async () => {
  const query = 'SELECT * FROM todo';
  const result = await pool.query(query);
  return result.rows;
};

const remove = async (id) => {
  const query = 'DELETE FROM todo WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = { create, get, remove };
