const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.user(bodyParser.json())

app.listen(3000);
