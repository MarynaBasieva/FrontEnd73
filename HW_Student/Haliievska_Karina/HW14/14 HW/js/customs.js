jQuery(document).ready(function(){


    jQuery('.btn_banner').on('click', function(){
      jQuery('.parent_modal').fadeIn('slow')
    });

    jQuery('.exit').on('click', function(){
        jQuery('.parent_modal').fadeOut('slow')
      });
});