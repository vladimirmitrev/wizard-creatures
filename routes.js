const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
// const postController = require('./controllers/postController');

router.use(homeController);
router.use('/auth', authController);
// router.use('/posts', postController);

router.all('*', (req, res) => {
   res.render('404'); 
});

module.exports = router;