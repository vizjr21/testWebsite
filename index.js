

let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000);