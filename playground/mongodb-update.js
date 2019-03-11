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


    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c83d5c7bbe990cd60e7448c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((resault) => {
    //     console.log(resault);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: 123,
    },{
        $set: {
            name: 'Cena'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((resault) => {
        console.log(resault);
    });

    client.close();
});