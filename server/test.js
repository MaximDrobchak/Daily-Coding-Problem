const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/db/problems.db');
const sql = `SELECT * FROM Google`;

db.all(sql, [], (err, rows) => {
	if (err) {
		throw err;
	}
	rows.forEach(row => {
		console.log(row.description);
	});
});

// close the database connection
db.close();
