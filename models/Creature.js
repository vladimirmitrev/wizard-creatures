const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters']
    },
    species: {
        type: String,
        required: [true, 'Species is required!'],
        minLength: [3, 'Species should be at least 3 characters']
    },
    skinColor: {
        type: String,
        required: [true, 'Skin color is required!'],
        minLength: [3, 'Skin color should be at least 3 characters']
    },
    eyeColor: {
        type: String,
        required: [true, 'Eye color is required!'],
        minLength: [3, 'Eye color should be at least 3 characters']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'Image must be an URL!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description should be at least 5 characters'],
        maxLength: [500, 'Description should be no longer than 500 characters'],
    },
    votes : [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, 
{ timestamps: true}
);

const Creature = mongoose.model('Creature', courseSchema);

module.exports = Creature;
