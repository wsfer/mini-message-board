const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>
  res.render('index', { title: 'Mini messageboard', messages })
);
app.get('/new', (req, res) => res.send('Message form'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
