
require("express-async-errors");
const compression = require('compression')
const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const path = require('path')
const methodOverride = require('method-override')
const publicRoutes = require('./routes/public');
const apiRoutes = require('./routes/api');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname + '/views')));
app.use('/views', express.static(path.resolve(__dirname, 'views/partials')));

app.use(compression())
app.use(express.static(path.resolve(__dirname + '/node_modules'), { maxAge: 86400000 /* 1d */ }));
app.use(express.static(path.resolve(__dirname + '/public'), { maxAge: 86400000 /* 1d */ }));
app.use(methodOverride("_method"));

app.use("/api", apiRoutes);
app.use("/", publicRoutes);

app.use((error, req, res, next) => {
    // render error page
    console.log(error)
    res.sendStatus(500);
})

app.listen(port, () => {
    console.log("EEA server at " + port)
})