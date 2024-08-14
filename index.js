// Initialize global variables
global.loggedIn = null
global.userId = null

const express = require('express')
const mongoose = require('mongoose')
const expressSession = require('express-session')

// Importing the  controllers
const dashboardcontroller = require("./controller/dashboardcontroller")
const g2pagecontroller = require("./controller/g2pagecontroller")
const gpagecontroller = require("./controller/gpagecontroller")
const gpostcontroller = require('./controller/gpostcontroller')
const g2pagepostcontroller = require("./controller/g2pagepostcontroller")
const usersignupcontroller = require('./controller/usersignupcontroller')
const loginUserController = require('./controller/loginUsercontroller')
const logoutUsercontroller = require('./controller/logoutUser')

// MongoDB connection string
mongoose.connect(
    "mongodb+srv://prajapativipul0408:ySLt7oH0OggtUVLh@cluster0.bmbnbsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const app = express()


const authmiddleware = require('./middleware/authmiddleware')
const notValMiddleware = require('./middleware/notvalmiddleware')


app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressSession({
    secret: 'This is the session',
    resave: true,
    saveUninitialized: true
}))

// setting the login status 
app.use((req, res, next) => {
    res.locals.loggedIn = req.session.userId
    next()
})

// creating validation middleware
const Validation = (req, res, next) => {
    next()
}
app.use(Validation)

// xreating routes
app.get("/login", notValMiddleware, (req, res) => {
    res.render("login");
  });

app.get("/", (req, res) => {
    res.render("dashboard")
});

app.get("/g2", authmiddleware, (req, res) => {
    res.render("g2");
});
app.get("/g", authmiddleware, gpagecontroller)
app.get("/logout", logoutUsercontroller)

app.post("/g", gpostcontroller)
app.post("/add-new-g2user", g2pagepostcontroller) 
app.post("/register/post", notValMiddleware, usersignupcontroller) 
app.post("/login/post", loginUserController) 


app.listen(4000, () => {
    console.log('http://localhost:4000/')
})
