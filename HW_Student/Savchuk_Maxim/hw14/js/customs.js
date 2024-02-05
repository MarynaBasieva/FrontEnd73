jQuery(document).ready(function(){
	
	jQuery('.btnh2').on('click', function(){
		jQuery('.formnone').fadeIn('slow');
	});

	jQuery('.close').on('click', function(){
		jQuery('.formnone').fadeOut('slow');
	});
});