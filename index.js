const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello From my Smarty Smarty over Node!!')
});

const users = [
    { id: 1, name: "shabana mam", email: "shabana@gmail.com", phone: '017888888888' },
    { id: 2, name: "shabnur mam", email: "shabnur@gmail.com", phone: '017888888888' },
    { id: 3, name: "shuchorita mam", email: "shucorita@gmail.com", phone: '017888888888' },
    { id: 4, name: "sunny mam", email: "sunny@gmail.com", phone: '017888888888' },
    { id: 5, name: "sraboni mam", email: "sraboni@gmail.com", phone: '017888888888' },
    { id: 6, name: "shokina mam", email: "shokina@gmail.com", phone: '017888888888' },
    { id: 7, name: "srabonti mam", email: "srabonti@gmail.com", phone: '017888888888' },
]
app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(suser => suser.id === id);
    res.send(user);
})

app.listen(port, () => {
    console.log("Listening to port", port);
});