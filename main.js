const input = require('sync-input');


function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

function test() {
	console.log("Let's test your programming knowledge.");
	console.log("Do you remember the year the World Cup was held in South Africa?");
	let op;
	do{
		console.log("1.- 2006");
		console.log("2.- 1990");
		console.log("3.- 2010");
		console.log("4.- 2002");
		console.log("5.- 1996");
		console.log("6.- 1994");
		console.log("7.- 2018");
		console.log("8.- 1986");
		console.log("9.- 2014");
		console.log("10.- 1950");
		op = input();
		if(op !== "3"){
			console.log("Please, try again.");
		}
	}while (op !== "3");
}

function end() {
	console.log("Completed, have a nice day!");
	console.log("Congratulations, have a nice day!");
}


greet('C:me', '2022')  // change it as you need
remind_name();
guess_age();
count();
test();
end();
