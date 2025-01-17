const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query(
    'SELECT * FROM messages ORDER BY created_at DESC'
  );
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id=$1', [id]);
  return rows[0];
}

async function createMessage({ username, text }) {
  await pool.query('INSERT INTO messages (username, text) VALUES ($1, $2)', [
    username,
    text,
  ]);
}

module.exports = { getAllMessages, getMessageById, createMessage };
