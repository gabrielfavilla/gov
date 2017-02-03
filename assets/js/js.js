$(function(){
	$('.Video-item').on('mouseover', function(){
		var video = $(this).find('video')[0];		

		setTimeout(function () {      
	   video.play();
	}, 150);
	});

	$('.Video-item').on('mouseleave', function(){
		var video = $(this).find('video')[0];
		
		video.pause();
		video.currentTime = 0;
	});

	// AJUSTA O TAMANHO DO BANNER
	var wH = $(window).height() - 150;

	$('.js-fullHeight').css({height: wH})

});