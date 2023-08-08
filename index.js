const express = require('express');
const bodyParser = require('body-parser');
const siteMapper = require("./routes/siteMapper.js");


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(express.urlencoded({
    extended: true,
}))

app.use('/', siteMapper);

app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));