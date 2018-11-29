const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/db/mydb.db');

app.post('/api/world', (req, res) => {
	console.log(req.body.post);

	db.serialize(function() {
		db.run('CREATE TABLE if not exists users (info TEXT)');
		const stmt = db.prepare('INSERT INTO users VALUES (?)');
		stmt.run(req.body.post);

		stmt.finalize();

		db.each('SELECT rowid AS id, info FROM users', function(
			err,
			row,
		) {
			console.log(row.id + ': ' + row.email);
		});
	});

	db.close();

	res.send(
		`I received your POST request. This is what you sent me: ${req
			.body.post}`,
	);
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
