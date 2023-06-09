const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const DATABASE_URL =
	'mongodb+srv://garoy:xw32LrCGt8g73Rxa@foodapp2.dizply4.mongodb.net/?retryWrites=true&w=majority';
const PORT = 8888;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

mongoose.connect(DATABASE_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

mongoose.connection
	.on('open', () => console.log('You are connected to mongoose'))
	.on('close', () => console.log('You are disconnected from mongoose'))
	.on('error', (error) => console.log(error));

const GigSchema = new mongoose.Schema({
	event: {
		eventOwner: String,
		venueName: String,
		eventName: String,
	},
	location: {
		state: String,
		city: String,
		venue: String,
	},
	date: {
		stringDateTime: Object,
		integerDateTime: Object,
	},
});

const Gigs = mongoose.model('Gigs', GigSchema);

// Landing / Redirect Route
app.get('/', (req, res) => {
	res.redirect('/gigs');
});

// Index route
app.get('/gigs', async (req, res) => {
	try {
		const response = await Gigs.find();
		console.log(response[0].eventName);
		res.json(response);
	} catch (error) {
		res.status(400).json(error);
	}
});

// Create Route
app.post('/gigs', async (req, res) => {
	try {
		res.json(await Gigs.create(req.body));
	} catch (error) {
		res.status(400).json(error);
	}
});

// Update Route
app.put('/gigs/:id', async (req, res) => {
	try {
		res.json(
			await Gigs.findByIdAndUpdate(req.params.id, req.body, { new: true })
		);
	} catch (error) {
		res.status(400).json(error);
	}
});

// Delete Route
app.delete('/gigs/:id', async (req, res) => {
	try {
		res.json(await Gigs.findByIdAndDelete(req.params.id));
	} catch (error) {
		res.status(400).json(error);
	}
});

// Show Route
app.get('/gigs/:id', async (req, res) => {
	try {
		res.json(await Gigs.findById(req.params.id));
	} catch (error) {
		res.status(400).json(error);
	}
});

// App Listener
app.listen(PORT, () => {
	console.log(`Hey there, Delilah, what's it like in Port ${PORT}?`);
});
