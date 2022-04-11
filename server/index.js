const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
	res.json({ msg: "This is an api" });
});

app.use("/api/drinks", require("./routes/drinkchoice"));

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
