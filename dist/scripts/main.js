$(document).on('ready', function(){


var $button = $("#button");
var $form = $("#form");
var $name = $("#name");
var $email = $("#email");
var $website = $("#website");
var $message = $("#message");

$button.click(submitForm);

function submitForm(e) {
	e.preventDefault();
	if (validate()==true) {
		var success = "Thank you for bothering us," + $name.val() +" . We'll begin spamming you very soon."
	}
}


$button.mouseover(function () {
		$button.css('transition', 'background-color 0.5s ease');
		$button.css('background-color', '#88C470');
		
	});

});