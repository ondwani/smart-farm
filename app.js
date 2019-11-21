const express = require('express'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  expressLayouts = require('express-ejs-layouts'),
  port = process.env.PORT || 4000;

const app = express();

mongoose
  .connect(
    'mongodb+srv://nyatindopatrick:dogobigy97@riders-ecfkm.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log('DB connected successfully'))
  .catch(err => console.log(err));

app.use(logger('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));

app.listen(port, () => console.log(`listening on port ${port}`));
