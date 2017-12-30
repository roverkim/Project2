// Get the modal
// var modal = document.getElementById('myModal');
var modal = $('#myModal')

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('#myImg');
// var modalImg = document.getElementById("img01");
var modalImg = $("#modalImg")
var captionText = $("#caption > p");

$('section.timeline').on('click','img',function(){
	modal.css("display","block");
	// modal.style.display = "block";
	var source = $(this).attr("src");

    modalImg.attr("src",source)

    var caption = $(this).attr("alt");

    captionText.text(caption);
    // captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = $(".close");

// When the user clicks on <span> (x), close the modal
span.click(function() {
    modal.css("display","none");
});
