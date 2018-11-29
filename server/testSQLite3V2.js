//Load modules
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./server/db/mydb.db');

let sql = `SELECT * from user_info where 1`;

db.all(sql, [], (err, rows) => {
	if (err) {
		throw err;
	}
	rows.forEach(row => {
		console.log(row.info);
	});
});
// db.all('SELECT user_info', function(err, rows) {
// 	//rows contain values while errors, well you can figure out.
// });

//Perform INSERT operation.
// db.run('INSERT  info VALUES (val1)');

// //Perform DELETE operation
// db.run('DELETE from info where condition');

// //Perform UPDATE operation
// db.run('UPDATE info where condition');
