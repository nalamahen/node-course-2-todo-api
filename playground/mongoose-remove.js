const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//     console.log(results);
// });


Todo.findByIdAndRemove('5b2cc9bc1eb79837bbebdf08').then((todo) => {
    console.log(todo)
});