const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let blogSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    blog: {
        type: String
    }

}, {
    collection: 'blogs'
})

module.exports = mongoose.model('Blog', blogSchema)