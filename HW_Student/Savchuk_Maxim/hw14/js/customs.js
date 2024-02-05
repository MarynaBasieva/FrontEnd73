jQuery(document).ready(function(){
	
	jQuery('.btnh2').on('click', function(){
		jQuery('.parent_modal').fadeIn('slow');
	});

	jQuery('.close').on('click', function(){
		jQuery('.parent_modal').fadeOut('slow');
	});
});