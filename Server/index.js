const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');


const app = express();

//middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Add stuff here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





