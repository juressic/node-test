const express = require('express');
const path = require('path');

const app = express();

const PORT = 5556;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//app.use(express.static(path.join(__dirname, '/public')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
