//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Uncable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);      
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Krish'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs));
    }, (err) => {
        if(err) {
            console.log('Unable to fetch user');
        }
    })

    //client.close();
});