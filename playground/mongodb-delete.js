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

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((resault) => {
    //     console.log(resault);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((resault) => {
    //     console.log(resault);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((resault) => {
    //     console.log(resault);
    // });

    // db.collection('Users').deleteMany({name: 'Cena'}).then((resault) => {
    //     console.log(resault);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c83b9bea1f39124ec3c4938')}).then((resault) => {
        console.log(resault);
    });

    client.close();
});