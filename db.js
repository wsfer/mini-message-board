/**
 * It's just a fake database for learning purposes
 *
 * Message {
 *    id: Integer
 *    user: String
 *    text: String
 *    createdAt: Date
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

async function createMessage({ user, text }) {
  messages.push({
    id: autoIncrementId++,
    user: user,
    text: text,
    createdAt: new Date(),
  });
}

module.exports = { getAllMessages, getMessageById, createMessage };
