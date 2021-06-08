const express = require("express") //Importing Express.
const mongoose = require('mongoose')
require('dotenv').config();
const passport = require('passport');

//Require express session inorder to monitor authentication.
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const SignUp = require('./models/SignUp')
const employeeRoutes = require("./routes/employeeRoute")
const loginRoutes = require("./routes/loginRoute")
const customerRoutes = require("./routes/customerReqRoute")
const driverRegRoutes = require("./routes/driverRoute")
const conductorRoutes = require("./routes/conductorRoute")
const signUpRoutes = require("./routes/signUpRoute")
const truckRoutes = require("./routes/truckRoute")
const truckPaymentRoutes = require("./routes/truckPaymentRoute")
const driverPaymentRoutes = require("./routes/driverPaymentRoute")
const logoutRoutes = require("./routes/logoutRoute")
const conductorPaymentRoutes = require("./routes/conductorPaymentRoute")

const app = express();

// Connecting to my database.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false


});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
   });

  
// configurations
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/employee',(req, res, next) => {
    console.log("A new request received at ");
    next();  
  });
  

// Middleware for serving static files.
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.use(express.urlencoded({extended: true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(SignUp.createStrategy());
passport.serializeUser(SignUp.serializeUser());
passport.deserializeUser(SignUp.deserializeUser());




// routes.
    
app.use('/employee', employeeRoutes);
app.use('/login', loginRoutes);
app.use('/request', customerRoutes);
app.use('/', signUpRoutes)
app.use('/driver', driverRegRoutes);
app.use('/', conductorRoutes);
app.use('/truck', truckRoutes);
app.use('/truckPayment',truckPaymentRoutes);
app.use('/driverPayment',driverPaymentRoutes);
app.use('/conductorPayment',conductorPaymentRoutes);



app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
   
// server
app.listen(4000, () => console.log('listening on port 4000'));


