const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/movies', (req, res) =>
  res.json([{ name: 'Maharshi', hero: 'Mahesh' }])
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
