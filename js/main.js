function askQuestions () /* roundbrackets means 'run function'! */ {


	var firstName = prompt('What is your first name?'),
		lastName = prompt('What is your last name?'),
		fullName = firstName + ' ' + lastName;


	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age>= 18) {

		console.log ('User is an adult'); 
	} 

	else if (age>= 13) { 

		console.log ('User is a teenager');
	}

	else { 

		console.log ('User is a child');
	}

	if (firstName === 'general') {

		if (lastName !== 'Assembly') {

			console.log ('Hey!')

		}

}

}
	

/* JS when page has loaded */
$(function () {

	/* when user clicks on image, run askQuestions */
	$('img').on('click', askQuestions)

	/* when user clicks h3 element */
	$('h3').on ('click', function () {

	/* hide next element */
	$(this).next().slideToggle(750); 

	});

});