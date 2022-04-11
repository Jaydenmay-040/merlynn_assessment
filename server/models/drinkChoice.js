const mongoose = require("mongoose");

const DrinkChoiceSchema = mongoose.Schema({
	attributes: {
		type: Object,
		properties: {
			drink: {
				type: String,
				required: true,
			},
			temperature: {
				type: String,
				required: true,
			},
			gender: {
				type: String,
				required: true,
			},
			age: {
				type: String,
				required: true,
			},
			senstive: {
				type: String,
				required: true,
			},
			time: {
				type: Date,
				required: true,
			},
			pregnant: {
				type: String,
				required: true,
			},
			health: {
				type: String,
				required: true,
			},
			numberOfDrinkPerDay: {
				type: String,
				required: true,
			},
			numberOfDrinksToday: {
				type: String,
				required: true,
			},
		},
	},
});

module.exports = mongoose.model("drinks", DrinkChoiceSchema);
