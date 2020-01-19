const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


mongoose.connect('mongodb+srv://omnistack:<omnistack>@cluster0-lsfts.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

const app = express();

app.use(routes);
app.use(express.json());

app.listen(3333);