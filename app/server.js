const express = require("express");
const bodyParser = require("body-parser");
const routerUser = require('./api/routers/user');
const routerProduct = require('./api/routers/products');
const routerLogin = require('./api/routers/login');
const passport = require('passport');
const flash = require('express-flash');
// const session = require('express-session');

const app = express();

// app.use(session({ cookie: { maxAge: 60000 }, 
//   secret: 'woot',
//   resave: false, 
//   saveUninitialized: false}));


app.use(passport.initialize());
app.use(flash());

app.use('/user',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', routerUser);
app.use('/product', routerProduct);
app.use('/login', routerLogin);



app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Trang chu'
  })
})


app.listen(3000, (err) => {
  if(err){
    console.log(err);
  }
  console.log("app listening on port 3000");
});
