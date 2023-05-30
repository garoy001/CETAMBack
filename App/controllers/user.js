// require('dotenv').config();
// const User = require('../../Database/Models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// // const express = require("express")
// const express = require('express');
// const router = express.Router();
// const { SECRET } = process.env;

// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());



// router.post('/login', async (req, res) => {
// 	try {
// 		console.log('1');
// 		const { username, password } = req.body;
// 		const user = await User.findOne({ username });
// 		if (user) {
// 			const match = await bcrypt.compare(password, user.password);
// 			if (match) {
// 				const token = await jwt.sign({ username }, SECRET);
// 				res.status(200).json({ token });
// 			} else {
// 				res.status(400).json({ error: 'PASSWORD DOES NOT MATCH' });
// 			}
// 		} else {
// 			res.status(400).json({ error: 'USER DOES NOT EXIST' });
// 		}
// 	} catch (error) {
// 		res.status(400).json({ error });
// 	}
// });
// // Add the router to server.js as a dependency when ready to implement auth
// // const authRouter = require("./controllers/user")
// // add router to server.js: app.use("/auth", authRouter)

// //===================AUTH MIDDLEWARE==============
// //add the following to authMiddleware.js:
// // require("dotenv").config()
// // const jwt = require("jsonwebtoken")

// // const auth = async (req, res, next) => {
// //     try{
// //     if(req.headers.authorization){
// //         const token = req.headers.authorization.split(" ")[1]
// //         const payload = await jwt.verify(token, SECRET)
// //         if(payload){
// //             req.body.payload = payload
// //             next()
// //         } else{
// //             res.status(400).json({error: "VERIFICATION FAILED OR NO PAYLOAD"})
// //         }
// //     } else {
// //         res.status(400).json({error: "NO AUTHORIZATION HEADERS"})
// //     }}
// //     catch(error){
// //         res.status(400).json({error})
// //     }
// // }

// // module.exports = auth

// module.exports = router;
