const router = require('express').Router();
const { getErrorMessage } = require('../utils/errorUtils');
const { isAuth } = require('../middlewares/authMiddleware');
const userService = require('../services/userService');

router.get('/', async (req, res) => {

  res.render('home');
});

router.get('/my-posts', isAuth, async (req, res) => {
  const user = await userService.getInfo(req.user._id).lean();
  // const userFirstName = user.firstName;
  // const userLastName = user.lastName;
   
  res.render('my-posts', { user });
});

module.exports = router;
