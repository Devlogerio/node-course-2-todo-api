var express = require('express');
var bodyParsaer = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

const {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParsaer.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    
    User.findById(id).then((user) => {
        if(!user){
            return res.status(404).send();
        }
        return res.send(user);
    }).catch((e) => {
        res.status(400).send();
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.expoerts = {app};