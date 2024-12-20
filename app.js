const express = require('express');
const app = express();
const path = require('path');
const messagesRouter = require('./routes/messagesRouter');

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.redirect('/messages'));
app.use('/messages', messagesRouter);

app.use((err, req, res, next) => {
  const { statusCode, message } = err;

  if (statusCode === 404) {
    res.status(404).render('404', { message });
  } else {
    console.error(err);
    res.status(statusCode || 500).end();
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
