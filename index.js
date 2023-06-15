const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const db = require("./config/mongoose");

const port = process.env.PORT || 8000;
const app = express();

//------------ Passport Configuration ------------//
require('./config/passport')(passport);

//------------ Bodyparser Configuration ------------//
app.use(express.urlencoded({ extended: false }));

//------------ EJS Configuration ------------//
app.use(expressLayouts)
app.use('/assets',express.static('./assets'))
app.use('view engine', 'ejs')

//------------ Passport Middlewares ------------//

//------------ Connecting flash ------------//
app.use(flash());

//------------ Global variables ------------//
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//------------ Routes ------------//

//------------ Express session Configuration ------------//
app.use(
    session({
        secret:'secret',
        resave:true,
        saveUninitialized:true
    })
)

app.listen(port, function (err) {
  if (err) {
    console.log("Error Starting the Server");
  }
  console.log(`Server up & running on port: ${port}`);
});
