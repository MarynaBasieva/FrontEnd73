jQuery(document).ready(function(){


    jQuery('.btn_bottom').on('click', function(){
      jQuery('.parent_modal').fadeIn('slow')
    });

    jQuery('.btn_form').on('click', function(){
        jQuery('.parent_modal').fadeOut('slow')
      });
});