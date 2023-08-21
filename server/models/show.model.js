const mongoose = require('mongoose');

const TvShowSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'You must put a title'],
        minLength: [2, 'The title must be at least two characters']
    },
    network: {
        type:String,
        required: [true, 'You must put a network'],
        minLength: [2, 'The network must be at least two characters']
    },
    numberOfSeasons: {
        type:Number,
        required: [true, 'You must put a number of seasons'],
        min:[1, 'Has to be at least 1 season'],
    },
    stillOn:{
        type:Boolean,
        required: [true, 'You must fill out this field'],
    }
}, {timestamps:true})

const TvShow = mongoose.model('TvShow', TvShowSchema)
module.exports = TvShow