//Fullpage.js
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
    scrollHorizontally: false,
    keyboardScrolling: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

//Typed.js
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30,
  startDelay: 1000,
  backDelay: 2000,
  backSpeed: 30,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});

$(window).on('scroll', function(event){
  var scrollPos = $(document).scrollTop();
  $(".nav li a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));

    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      currLink.parent().addClass("active").siblings().removeClass("active"); 
      return;
    }
    else{
      currLink.parent().removeClass("active");
    }
  })
})

//Mouse-point-move
var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
});

var follower = $("#mouse-point-move");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp});
    
}, 30);