//-----------------------////////
// Modules
//-----------------------////////
const express = require('express');
const router = express.Router();
//-----------------------////////
// Middleware
//-----------------------////////
// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());
//-----------------------////////
// Redirect Route
//-----------------------////////
router.get('/', (req, res, next) => {
	try {
		res.redirect('/gigs');
	} catch (err) {
		console.log(
			'///// error is located at landingPage.js //////\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});

module.exports = router;
