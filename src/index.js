/*jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');

const api = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);
