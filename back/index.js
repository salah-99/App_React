const express = require ('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


require('./models/dbConfig');


const AddCategory = require('./routes/CategoryController');
const questionRoutes = require('./routes/questionController');
const reh = require ('./routes/questionController2');


const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');

mongoose.set('useFindAndModify' , false);
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.set('views' , path.join(__dirname, '/views/'));
app.engine('hbs' , exphbs({  extname : 'hbs' , defaultLayout : 'index' , LayoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine' , 'hbs');

app.use(express.json());




app.use(cors());

app.use('/Category' , questionRoutes); 

app.use('/AddCategory' , AddCategory); 
// 
app.use('/Category2' , reh);
//port
app.listen(4000 , () => console.log('Server is starting :4000'));