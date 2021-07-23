let body = document.getElementById('body');

window.onscroll = function() {
  let value = ((window.pageYOffset) / (($('section').offset()).top+10000)) + 1;
  console.log(value);
  $('.inner').css("transform",`scale(${value})`);
  if(window.pageYOffset>=100){
    $('#navigation').addClass('nav_attach')
  }else{
    $('#navigation').removeClass('nav_attach')
  }
};



// $(function(){
	
// 	var $window = $(window);		//Window object
	
// 	var scrollTime = 1.2;			//Scroll time
// 	var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
// 	$window.on("mousewheel DOMMouseScroll", function(event){
		
// 		event.preventDefault();	
										
// 		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
// 		var scrollTop = $window.scrollTop();
// 		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
// 		TweenMax.to($window, scrollTime, {
// 			scrollTo : { y: finalScroll, autoKill:true },
// 				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
// 				autoKill: true,
// 				overwrite: 5							
// 			});
					
// 	});
	
// });
