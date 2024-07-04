const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
const publicDiretoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDiretoryPath));

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
