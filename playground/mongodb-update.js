//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Uncable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b28c70f84f43864ec35a778')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log('result', result);
    // });

     db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2292af2e4bdeb3a0835027')
    }, {
        $set: {name: 'Krish Mahendramoorthy'},
        $inc: { age: 11}        
    }, {
        returnOriginal: false
    }).then(result => {
        console.log('result', result);
    });


    //client.close();
});