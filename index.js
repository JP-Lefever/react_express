import express from "express";
import cors from "cors";

const app = express();
const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};
app.use(cors({ origin: ["http://localhost:5173"] }));

const servEmployee = (req, res) => {
	res.json({ results: [sampleEmployee] });
};
app.get("/api/employees", servEmployee);

const port = 3310;
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
