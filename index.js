const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'view/index.html'));
});
 
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'view/contact.html'));
});

app.get('/thanks', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'view/thanks.html'));
});
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});
