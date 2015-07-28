$(document).on('ready', function(){

var $main = $("#main");
var $button = $("#button");
var $form = $("#form");
var $name = $("#name");
var $email = $("#email");
var $website = $("#website");
var $message = $("#message");
var $nameerr = $("#nameerror");
var $emailerr = $("#emailerror");
var $websiteerr = $("#websiteerror");
var $commenterr = $("#commenterror");

errormessage = [$nameerr, $emailerr, $websiteerr, $commenterr];
input = [$name, $email, $website, $message];


$button.click(checkErrors);

function checkErrors(e) {
	noErrors();

	for(var i=0; i<input.length; i++) {

		if(validator.isNull(input[i].val())){
			e.preventDefault();
			errormessage[i].show();
			input[i].css("2px solid pink");
		}
	}
	
	if(checkEmail(e) && checkwebsite(e)) {

		if(validator.isNull($name) && validator.isNull($message)) {
			$nameerr.show();
			$commenterr.show();
			e.preventDefault();
		}

		else if(validator.isNull($name)) {
			$nameerr.show();
			e.preventDefault();
		}

		else if(validator.isNull($message)) {
			$commenterr.show();
			e.preventDefault();
		}
		else {
			successMessage(e);
		}
	}
		else {
			e.preventDefault();
		}
}

function checkEmail(e){

	if(!validator.isEmail($email.val())){
		
		$emailerr.show();
		$email.css("2px solid pink");
		e.preventDefault();
	
	}
	else{

		return true
	}
}

function checkwebsite(e){

	if(!validator.isURL($website.val())){
		
		$websiteerr.show();
		$website.css("2px solid pink");
		e.preventDefault();
	}
	else {
		
		return true
	}
}

function successMessage(e){

	e.preventDefault();
	$main.hide();
	$('#successpage').html('<p>Thanks so much for contacting us, butthole. You will never receive a reply!</p>');
	$('#successpage').show();

	
}

function noErrors () {

	for(var i =0; i <errormessage.length; i++){

		errormessage[i].hide();
		input[i].css("2px solid pink");
	}
}

	$button.mouseover(function () {
		$button.css('transition', 'background-color 0.5s ease');
		$button.css('background-color', '#88C470');
		
	});

});