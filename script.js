function checkDriverAge() 
{
	var age = prompt("What is your age?");

	if (Number(age) < 18) 
	{
		alert("Sorry, you are too yound to drive this car. Powering off");
	} 
	else if (Number(age) > 18) 
	{
		alert("Powering On. Enjoy the ride!");
	} 
	else if (Number(age) === 18) 
	{
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge();

alert("Now check console.log!!");

var checkDriverAge2 = function(a) {

	if (Number(a) < 18) 
	{
		return console.log("Sorry, you are too yound to drive this car. Powering off");
	} 
	else if (Number(a) > 18) 
	{
		return console.log("Powering On. Enjoy the ride!");
	} 
	else if (Number(a) === 18) {
		return console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

console.log("Use checkdriverage2 function to check if you can drive the car or not");




