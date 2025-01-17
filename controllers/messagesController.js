const db = require('../db');
const asyncHandler = require('express-async-handler');
const NotFoundError = require('../errors/NotFoundError');

const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini messageboard', messages: messages });
});

const getMessage = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const message = await db.getMessageById(id);

  if (message) {
    res.render('message', {
      title: `Mini messageboard | message ${message.id}`,
      message: message,
    });
  } else {
    throw new NotFoundError('Message not found');
  }
});

const getMessageForm = asyncHandler(async (req, res) => {
  res.render('message-form', { title: 'Mini messageboard | new message' });
});

const postMessage = asyncHandler(async (req, res) => {
  const { username, text } = req.body;
  await db.createMessage({ username, text });
  res.redirect('/messages');
});

module.exports = { getAllMessages, getMessage, getMessageForm, postMessage };
