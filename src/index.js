const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const post = 3000;

const route = require('./routes');

const db = require('./config/db');
// app.use(morgan("combined"));

// Connect to db
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

route(app);

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(post);
