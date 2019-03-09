//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';


MongoClient.connect(url+dbName, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, resault) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(resault.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Cena',
    //     age: 26,
    //     location: 'Tehran'
    // }, (err, resault) => {
    //     if(err) {
    //         return console.log('Unable to insert to users', err);
    //     }

    //     console.log(resault.ops[0]._id.getTimestamp());
    // });


    client.close();
});