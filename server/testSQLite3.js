const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/db/mydb.db');
let check;
db.serialize(function() {
	db.run('CREATE TABLE if not exists user_info (info TEXT)');
	const stmt = db.prepare('INSERT INTO user_info VALUES (?)');
	for (let i = 0; i < 10; i++) {
		stmt.run('Ipsum ' + i);
	}
	stmt.finalize();

	db.each('SELECT rowid AS id, info FROM user_info', function(
		err,
		row,
	) {
		console.log(row.id + ': ' + row.info);
	});
});

db.close();
