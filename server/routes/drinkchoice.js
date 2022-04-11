const express = require("express");
const router = express.Router();
const config = require("config");

const DrinkChoice = require("../models/drinkChoice");

router.post("/", async (req, res) => {
	const {
		drink,
		tempreature,
		gender,
		age,
		sensitve,
		time,
		pregnant,
		health,
		numberOfDrinkPerDay,
		numberOfDrinkToday,
	} = req.body;
	try {
		let drinkChoice = new DrinkChoice({
			drink,
			tempreature,
			gender,
			age,
			sensitve,
			time,
			pregnant,
			health,
			numberOfDrinkPerDay,
			numberOfDrinkToday,
		});

		await drinkChoice.save();

		res.status(201).json("Drink Choice Added!!");
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server Error..." });
	}
});

module.exports = router;
