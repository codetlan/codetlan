Meteor.startup(function () {
	var actualId = undefined,
	emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	// desplegamos los productos
	$('.hi-icon').live('click',function (e) {
		e.preventDefault();
		var id = $(this).attr("data");
		if (actualId === id){
			$('.app-description-wrapper').slideUp();
			actualId = undefined;
		}else{
			$('.app-description-wrapper').slideDown();
			actualId = id;
			$('.app-description-content').hide();
			$('#'+id).slideDown();
		}				
	});

	// envio del formulario

	$('.button').live('click',function(e){
		var name = $("#input_name"),
		email = $("#input_email"),
		comment = $("#input_comment");
		$(".error").remove();
		if( name.val() == "" ){
			name.focus().after("<span class='error'>Ingrese su nombre</span>");
			return false;
		}else if( email.val() == "" || !emailreg.test(email.val()) ){
			email.focus().after("<span class='error'>Ingrese un email correcto</span>");
			return false;
		}
		// var data = "name=" + name.val() + "&email=" + email.val() + "&comment=" + comment.val();
		var data = {
			name : name.val(),
			email : email.val(),
			comment : comment.val(),
		};

       // In your client code: asynchronously send an email
       Meteor.call('sendEmail', data, function (err, data) {
       		$(".button").after("<span class='success'>Gracias por comunicarte con nosotros! <br> En breve nos pondremos en contacto.</span>");
                name.val("");
                email.val("");
                comment.val("");
                $(".success").fadeOut(6000);
       });
       return false;
   });

	$("#input_name").live('keyup',function(){
		if( $(this).val() !== "" ){
			$(".error").fadeOut();
			return false;
		}
	});
	$("#input_email").live('keyup',function(){
		if( $(this).val() !== "" && emailreg.test($(this).val())){
			$(".error").fadeOut();
			return false;
		}
	});
});