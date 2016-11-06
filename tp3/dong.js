$( document ).ready(function() {
	$("#valider").click(function() {
  		$(".modal_fade").css("display", "block");
	});

	$(".close , .btn_btn-default").click(function() {
  		$(".modal_fade").css("display", "none");
	});
});