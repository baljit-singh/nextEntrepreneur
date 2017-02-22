var height= $(window).height() - 40;
$(".SectionHeight").css("min-height",height);

$(window).scroll(function(){

	startEffect();
});

$('#collapseOne').collapse("hide");


function startEffect(){
	var wScroll = $(window).scrollTop();

	if($('#AboutComp').offset().top - 650 < wScroll){
		$('.hiddenFirstImg').each(function(i) {
			setTimeout(function(){
				$('.hiddenFirstImg').eq(i).addClass('appear');
				$('.hiddenFirstPara').eq(i).addClass('appear');
			}, 150*(i + 1));
		});

	}

	if($('#AboutConf').offset().top - 650 < wScroll){
		$('.hiddenFirstImg').each(function(i) {
			setTimeout(function(){
				$('.hiddenSecondImg').eq(i).addClass('appear');
				$('.hiddenSecondPara').eq(i).addClass('appear');
			}, 150*(i + 1));
		});
	}

	if($('.experience').offset().top - 650 < wScroll){
		$('.hiddenFirstImg').each(function(i) {
			setTimeout(function(){
				$('.hiddenThirdImg').eq(i).addClass('appear');
				$('.hiddenThirdPara').eq(i).addClass('appear');
			}, 150*(i + 1));
		});
	}
}
$(document).ready(function(){
  $('body').scrollspy({target: ".myFooter" , offset: 50});   
  $("#myLinks a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }  
  });
});






