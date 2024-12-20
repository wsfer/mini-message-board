const { Router } = require('express');
const messagesController = require('../controllers/messagesController');
const NotFoundError = require('../errors/NotFoundError');

const messagesRouter = Router();

messagesRouter.get('/', messagesController.getAllMessages);
messagesRouter.get('/message/:id', messagesController.getMessage);
messagesRouter.get('/new', messagesController.getMessageForm);
messagesRouter.post('/new', messagesController.postMessage);
messagesRouter.get('*', (req, res) => {
  throw new NotFoundError('Page not found');
});

module.exports = messagesRouter;
