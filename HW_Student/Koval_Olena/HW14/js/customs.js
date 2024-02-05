jQuery(document).ready(function(){
	
	jQuery('.qwehin').on('click', function(){
		jQuery('.parent_modal').fadeIn('slow');
	});

	jQuery('.close').on('click', function(){
		jQuery('.parent_modal').fadeOut('slow');
	});
});