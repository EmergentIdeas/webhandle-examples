var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index.html'], function(req, res, next) {
    res.locals.pageInfo = {
		title: 'Landing Page'
	}
    res.render('index')
})

router.get(['/upper.html'], function(req, res, next) {
    res.locals.pageInfo = {
		title: 'Uppercase Landing Page'
	}
	res.addFilter((chunk) => chunk.toString().toUpperCase())
    res.render('index')
})

module.exports = router;