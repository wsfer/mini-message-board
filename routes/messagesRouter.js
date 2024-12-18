const { Router } = require('express');
const messagesController = require('../controllers/messagesController');
const messagesRouter = Router();

messagesRouter.get('/', messagesController.getAllMessages);
messagesRouter.get('/message/:id', messagesController.getMessage);
messagesRouter.get('/new', messagesController.getMessageForm);
messagesRouter.post('/new', messagesController.postMessage);

module.exports = messagesRouter;
