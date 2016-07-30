
//require mySQL to go to the
var mysql = require('mysql');


var connection = mysql.createConnection({
	user: 'root',
	password: '',
	host: 'localhost',
	port: 3306 ,
	database: 'songs_db'

});

connection.connect(function(err){
	if(err){
		throw err
	};
});

// var artist = 'Whitney Houston';
connection.query('SELECT * FROM songs_db WHERE ?', {
	artist : 'Bing Crosby',
}, function(err, rows){
	rows.forEach()
	console.log(row);
});


// connection.query('SELECT * FROM songs GROUP BY artist HAVING count(artist) > 1', function)
