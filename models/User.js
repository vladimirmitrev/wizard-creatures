const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required!'],
        minLength: [3, 'First name should be at least 3 characters'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!'],
        minLength: [3, 'Last name should be at least 3 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'Email should be at least 10 characters'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password should be at least 4 characters']
    },
    createdPosts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Animal',
    }],
    votedPosts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Animal',
    }],
}, {
    collation: {
        locale: 'en',
        strength: 2
    }
},
{ timestamps: true},
);

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
