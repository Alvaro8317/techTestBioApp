const express = require('express');
const routerApi = require('./routes/routes');
const app = express();

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
