const { Router } = require('express');
const messagesRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

messagesRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini messageboard', messages: messages });
});

messagesRouter.get('/new', (req, res) => {
  res.render('form', { title: 'Mini messageboard | New' });
});

messagesRouter.post('/new', (req, res) => {
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect('/');
});

module.exports = messagesRouter;
