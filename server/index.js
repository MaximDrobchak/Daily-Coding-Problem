const express = require('express');
const Promise = require('bluebird');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
// app.get('/api/problems', (req, res) => {
// 	res.send({ express: 'Hello From Express' });
// });

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/db/problems.db', err => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the chinook database.');
});

app.post('/api/problems', (req, res) => {
	const projectName = req.body.post;
	console.log(projectName);
	const sql = `SELECT * FROM ${projectName}`;
	const obj = [];
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}
		rows.forEach(row => {
			console.log(row.id + '\t' + row.description);
			obj.push({ id: row.id, description: row.description });
		});
		res.send([...obj]);
	});

	// close the database connection
	db.close();
});

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(
			path.join(__dirname, 'client/build', 'index.html'),
		);
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
