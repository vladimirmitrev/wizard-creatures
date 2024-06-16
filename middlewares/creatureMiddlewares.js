const creatureService = require('../services/creatureService');

async function isPostOwner(req, res, next) {
    const creature = await creatureService.getOne(req.params.creatureId).lean();
  
    if (creature.owner != req.user?._id) {
      return res.redirect(`/creatures/${req.params.creatureId}/details`);
    } 
  
    req.creature = creature;
  
    next();
  }
  
  exports.isPostOwner = isPostOwner;