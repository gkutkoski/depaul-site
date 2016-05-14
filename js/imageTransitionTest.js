$(document).ready(function() {
  $("#marq_controls").on('click', 'span', function() {
    $("#marqImgs img").removeClass("opaque");

    var newImage = $(this).index();

    $("#marqImgs img").eq(newImage).addClass("opaque");

    $("#marq_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});


function changeImage(imageUrl, element, title, caption) {
	    // $('#imageReplace').effect('explode',{mode:'show'},'slow');
		$('#imageReplace').css('background-image', 'url(' + imageUrl + ')');        
    	$('.navlink').removeClass('active');
    	$(element).addClass('active');
    	$('#imageTitle').html(title);
    	$('#imageCaption').html(caption);
        

	}