const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', { message: 'message' }));
app.get('/new', (req, res) => res.send('Message form'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
