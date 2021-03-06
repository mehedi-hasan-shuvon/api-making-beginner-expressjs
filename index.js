const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(suser => suser.id === id);
    res.send(user);
})


app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour fazle flavour')
});

app.post('/user', (req, res) => {
    console.log('request it is', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
});

app.listen(port, () => {
    console.log("Listening to port", port);
});