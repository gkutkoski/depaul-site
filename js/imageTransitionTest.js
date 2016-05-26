
function changeImage(imageUrl, element, title, caption) {
	    // $('#imageReplace').effect('explode',{mode:'show'},'slow');
		$('#imageReplace').css('background-image', 'url(' + imageUrl + ')');        
    	$('.navlink').removeClass('active');
    	$(element).addClass('active');
    	$('#imageTitle').html(title);
    	$('#imageCaption').html(caption);
        

	}

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}    

// $(document).ready(function() {
//     $('#focusmeplease').css({content: " - "});
// });