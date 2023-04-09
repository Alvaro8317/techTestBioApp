const express = require('express');
const routerApi = require('./routes/routes');
// const cors = require('cors');
const app = express();
// app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello world!');
});
routerApi(app);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
