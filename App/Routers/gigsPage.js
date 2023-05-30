//-----------------------////////
// Modules
//-----------------------////////
const express = require('express');
const { reset } = require('nodemon');
const Gigs = require('../../Database/Models/gigs');

//-----------------------////////
// Routers
//-----------------------////////
const router = express.Router();

//-----------------------////////
// Middleware
//-----------------------////////
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//-----------------------////////
// All Gigs Get Route
//-----------------------////////
router.get('/', async (req, res, next) => {
	try {
		console.log('get triggered');
		res.json(await Gigs.find({}));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the get route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Post Route
//-----------------------////////

router.post('/', async (req, res, next) => {
	try {
		console.log('post triggered');
		res.json(await Gigs.create(req.body));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the post route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Put Route
//-----------------------////////
router.put('/:id', async (req, res, next) => {
	try {
		console.log('got to the put');
		console.log('id =  ' + req.params.id);
		console.log(req.body);
		try {
			console.log('getting gig');
			let dbReturn = await Gigs.find({ _id: req.params.id });
			console.log('gig found');
			dbReturn = dbReturn[0];
			console.log('saving gig\n' + dbReturn);
			dbReturn.event = req.body.event;
			dbReturn.location = req.body.location;
			dbReturn.date = req.body.date;
			console.log('updated gig\n' + dbReturn);
			const dbSave = await dbReturn.save();
			res.json(dbSave);
			console.log('it worked');
		} catch (err) {
			console.log(err.message);
		}
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the put route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Delete Route
//-----------------------////////
router.delete('/:id', async (req, res, next) => {
	try {
		// const {username} = req.payload
		// req.body.username = username
		res.json(await Gigs.findByIdAndDelete(req.params.id));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js /////\nSpecifically the delete route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Single Gig Get Route
//-----------------------////////
router.get('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		res.json(await Gigs.findById(id));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the 2nd get route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});

module.exports = router;
