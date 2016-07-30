// require
var inquirer = require('inquirer');
//require mySQL
var mysql = require('mysql');

var connection = mysql.createConnection({
	user: 'root',
	password: 'bermudez',
	host: 'localHost',
	port: 3306,
	database: 'Bamazon_db'

});
//test connection 
connection.connect(function(err){
	if(err){
		throw err
	};
});

function showAll(argument) {
	//make sure the program runs 
	console.log('Successfully Connected to DB');
	//query to select all from the table in the SQL database
	connection.query('Select * from Products', function(err, results){
		console.log(results);
	});
	// body...
}

showAll();


//npm inquirer search

//questions to ask client are established here, i have to prompt the questions later on.
		// var questions = [{
		// 		type: 'list',
		// 		choices: ['1,2,3,4,5,6,7,8,9,10'],
		// 		message: 'Please Select One',
		// 		name: 'idChoice'
		// }];


inquirer.prompt([{
	type: 'list',
	choices:['1', '2','3','4','5','6','7','8','9','10'],
	message: 'Please Select an ID for the Item',
	name: 'idChoice',
}]).then(function(a){
	if (a.choices === "choice1") {
		console.log("you chose the first option")
	}
});

inquirer.prompt([{
	type: 'input',
	message: 'Choose Quantity please',
	name: 'quantity',
}]).then(function(a){
	if (a.choices === "choice1") {
		console.log("you chose the first option")
	}
});


// var questions =[{
// 	type:'list',
// 	choices: [1,2,3,4,5,6,7,8,9,10],
// 	message: 'Please choose one',
// 	name:
// }];

// function prompt(){
// 	inquirer.prompt(questions).then(function(answer){
// 		if (answer){
// 			console.log(answer);
// 		}
// 	})
// }

// questions();

// inquirer.prompt([{
// 	name: 'choice',
// 	message: 'What would you like to do?',
// 	type: 'list',
// 	choices: ['Place a bid', 'Put up an item for sale']
// }]).then(function (a) {
// 	if (a.choice === 'Place a bid') {
// 		placeBid();
// 	} else {
// 		sellItem();
// 	}
// });

// var start = function() {
// 	inquirer.prompt({
// 		type: 'list',
// 		choices:['1,2,3,4,5,6,7,8,9,10'],
// 		message: 'Please Select an ID for the Item',
// 		name: 'idChoice',
// 	}).then(function(answer){
// 		if ( idChoice === 1){
// 			console.log('You choose ', idChoice)
// 		}
// 	})
// }

// start();

// ,
// {
// 		//need to change this to have option for quantities
// 		type: 'list',
// 		choices: [],
// 		message: 'Please Choose # of Items You Would Like to Purchase',
// 		name: 'quantity'
//}


//Have to Prompt user for which ID to choose
// console.log(prompt);

// inquirer.prompt([{questions}]).then(function(answers){
// 	console.log(answers);
// });

// prompt();


// function promptQuestions(){
// 	inquirer.prompt(questions).then


// }
	// process.stdout.write('\033c');
	//inquirer.prompt(questions).then(function(answer) {
	//	if(answer) {
	//		console.log(answer.bidpost);
// 			console.log(answer.categories);
// 			if(answer.bidpost === 'Post') {
// 				makePost(answer.categories);
// 			} else {
// 				makeBid(answer.categories);
// 			}
// 		}
// 	});
// }