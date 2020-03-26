const router = require('express').Router();
const verify = require('../verifytoken');

router.get('/', verify , (req,res) => {
    res.json({
        posts: {
            title: 'My first post', 
            description: 'Random stuff that protected'
        }
    });
});

module.exports = router;