const express = require('express');
const ThingController = require('./controllers/Thing.controller')

const app = express();
const bodyParser = express.json()
app.use(bodyParser)

app.post('/thing', ThingController.createThing)

module.exports = app;
