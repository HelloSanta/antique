
(function ($) {
  Drupal.color = {
    logoChanged: false,
    callback: function(context, settings, form, farb, height, width) {
      // Change the logo to be the real one.
      if (!this.logoChanged) {
        $('#preview #preview-logo img').attr('src', Drupal.settings.color.logo);
        this.logoChanged = true;
      }
      // Remove the logo if the setting is toggled off. 
      if (Drupal.settings.color.logo == null) {
        $('div').remove('#preview-logo');
      }

      // Solid background.
//background
$('#preview-body', form).css('backgroundColor', $('#palette input[name="palette[BodyBg]"]', form).val());
$('#preview-body #page', form).css('backgroundColor', $('#palette input[name="palette[PageBg]"]', form).val());
$('#preview-header', form).css('backgroundColor', $('#palette input[name="palette[HeaderBg]"]', form).val());
$('#preview-body #page #content', form).css('backgroundColor', $('#palette input[name="palette[ContentBg]"]', form).val());
$('#preview-body #footer-wrapper', form).css('backgroundColor', $('#palette input[name="palette[FooterBg]"]', form).val());



 //color
 $('.prepage .menu  li a', form).css('color', $('#palette input[name="palette[MenuLink]"]', form).val());
 $('#preview-body #page #content,', form).css('color', $('#palette input[name="palette[ContentText]"]', form).val());
$('#preview-body #page #content a', form).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
$('#preview-body #footer-wrapper a', form).css('color', $('#palette input[name="palette[FooterLink]"]', form).val());

//hover{
  $('.prepage .menu  li a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuLink]"]', form).val());
                }
            );
$('#preview-body #page #content a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
                }
            );
$('#preview-body #footer-wrapper a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterLink]"]', form).val());
                }
            );

    }
  };







})(jQuery);
