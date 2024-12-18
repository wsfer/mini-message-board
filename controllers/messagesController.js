const db = require('../db');

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini messageboard', messages: messages });
}

async function getMessage(req, res) {
  const id = Number(req.params.id);
  const message = await db.getMessageById(id);

  if (message) {
    res.render('message', {
      title: `Mini messageboard | message ${message.id}`,
      message: message,
    });
  } else {
    // TODO: instead throw some error here
    res.status(404).end();
  }
}

async function getMessageForm(req, res) {
  res.render('message-form', { title: 'Mini messageboard | new message' });
}

async function postMessage(req, res) {
  const { user, text } = req.body;
  await db.createMessage({ user, text });
  res.redirect('/messages');
}

module.exports = { getAllMessages, getMessage, getMessageForm, postMessage };
