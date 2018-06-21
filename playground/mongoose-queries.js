const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b2b9cb9569e7229acd33164';

if(!ObjectID.isValid(id)) {
    console.log('Id is not valid');
}

Todo.findById(id).then((todo) => {
    if(!todo) {
        console.log('id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));