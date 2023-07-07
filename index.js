

let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/pictures-cat', (req, res) => {
    res.send('cute pictures of cats'); 
})

app.listen(3000);