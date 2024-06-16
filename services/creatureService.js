const Creature = require('../models/Creature');
const User = require('../models/User');

exports.create = async (userId, creatureData) => {
    const createdCreature = await Creature.create({
        owner: userId,
        ...creatureData,
    });

    await User.findByIdAndUpdate(userId, { $push: { createdPosts: createdCreature._id } });
    
    return createdCreature;
}

exports.getAll = () => Creature.find();

exports.getOne = (creatureId) => Creature.findById(creatureId);

exports.getOneDetailed = (creatureId) => this.getOne(creatureId).populate('owner').populate('votes');

exports.vote = async (creatureId, userId) => {
    await Creature.findByIdAndUpdate(creatureId, { $push: { votes: userId } });
    await User.findByIdAndUpdate(userId, { $push: { votedPosts: creatureId } });
  
};

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);

exports.edit = (creatureId, creatureData) => Creature.findByIdAndUpdate(creatureId, creatureData,{ runValidators: true});
