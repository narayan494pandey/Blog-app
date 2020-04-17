let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParse = require('body-parser');
let dbConfig = require('./database/db');
let createError = require('http-errors');


// Express route

const blogRoute = require('../backend/routes/blog.route');


// COnnect to mongoDB databASE

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('database successfully connected!')
}, error => {
    console.log('database could not connected: ' + error);
})


const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/blogs', blogRoute);


//Port


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('connect to port ' + port);
})


//404 error

app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.log(err.message);
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    res.status(err.statusCode).send(err.message)

});




