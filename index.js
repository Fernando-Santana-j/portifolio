//-------------importes------------
const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');
const nodemailer = require('nodemailer')
const ejs = require('ejs')



//------------Configs--------------
const app = express();

require('dotenv').config()

app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true,
}))


const SMTP_CONFIG = require('./configs/smtp');
const trasporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    service:'gmail',
    secure: true,
    auth:{
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls:{
        rejectUnauthorized: false
    }
})



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('views', './views')
app.set('view engine', 'ejs');




//----------------ROUTES-------------------



app.get('/', (req, res) => {
    res.render('index');
})









//----------------SERVER-------------------

const port = process.env.PORT || 3131
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}` );
});