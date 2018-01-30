// Write all your JavaScript code here or use additional files

// stupid zoom-effect which could have been done easier with css.

$(document).ready(function(){
	$('.img-fluid').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	});
});

//text4

//Progressbars animated

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
	$('.progress').each(function() {
		if ($(this).isInViewport()) {
			var bar = $(this).find('.progress-bar');
			bar.addClass('progress-animate');
			bar.css('width', bar.attr('aria-valuenow') + '%');

		}
	});
});

/* Loginfield*/

function passWord() {
	let username = document.getElementById('username1').value;
	let password = document.getElementById('password1').value;
	document.getElementById('vip').onclick = function () {
		if(username == 'Guest' && password =='12345'){
			location.href = '/vip.html';
		}
		else {
    alert("Sorry, nice try, but you are not part of the club!")
  }
 }
};

/* countdown until we are done with the education */

// Set the date we're counting down to
let countDownDate = new Date("Sep 24, 2018 08:00:22").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "Made it!";
    }
}, 1000);

// Unicorn Keylogger

const pressed = [];
const secretCode = 'jeff';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});
