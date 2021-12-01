const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
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

app.use(methodOverride('_method'));

route(app);

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(post);
