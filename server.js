const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);
    
mongoose.connect("mongodb+srv://ssalgado:IXNbbBKgPAESTQ0k@cluster0.2kqty9i.mongodb.net/portfolioDB", {useNewURLParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log("Server is running on 5000")
    })
})

//IXNbbBKgPAESTQ0k 