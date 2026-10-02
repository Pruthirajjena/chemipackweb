var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminloginRouter = require('./routes/adminloginvalidation');
var executivesignupRouter = require('./routes/executivesignupdata');
var executiveloginRouter = require('./routes/executiveloginvalidation');
var addemployeRouter = require('./routes/addemp');
var productimageRouter = require('./routes/Productimageupload');
var productdetailsRouter = require('./routes/addproductroutes');
var FeedbackRouter = require('./routes/feedbackroute');
var addnewbatchdata = require('./routes/addnewbatchdata');
var showproduct = require('./routes/showproductroutes');
var dalyproductiondata= require('./routes/daldyproductionroutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userdata/adminlogin', adminloginRouter);
app.use('/executive/executivesignup',executivesignupRouter);
app.use('/executive/loginvalidation',executiveloginRouter);
app.use('/add/employee/data',addemployeRouter);
app.use('/prduct/image/upload',productimageRouter);
app.use('/add/product/details',productdetailsRouter);
app.use('/feed/back/details', FeedbackRouter);
app.use('/add/New/batchdata',addnewbatchdata);
app.use('/show/product/onpage', showproduct);
app.use('/add/daly/production',dalyproductiondata);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
