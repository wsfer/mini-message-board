/**
 * It's just a fake database for learning purposes
 *
 * Message {
 *    id: Integer
 *    username: String
 *    text: String
 *    created_at: Date
 * }
 */

const messages = [];
let autoIncrementId = 1;

async function getAllMessages() {
  return messages.slice();
}

async function getMessageById(id) {
  return messages.find((msg) => msg.id === id);
}

async function createMessage({ username, text }) {
  // This is slow, but a real database would be better
  messages.unshift({
    id: autoIncrementId++,
    username: username,
    text: text,
    created_at: new Date(),
  });
}

module.exports = { getAllMessages, getMessageById, createMessage };
