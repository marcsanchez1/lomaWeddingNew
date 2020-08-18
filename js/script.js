// This is to hide and show the Our Story text
const readMoreButton = document.querySelector('button.read-more');
const readMoreText = document.querySelector('.read-more-text');

// Sticky navigation
  $(".bg-nav-color").sticky({
    topSpacing:0
  });

$('.read-more-text').hide();

readMoreButton.addEventListener('click', () => {
  if (readMoreText.style.display == 'none') {
    readMoreButton.textContent = 'Show Less';
    // readMoreText.style.display = 'block';
    $('.read-more-text').slideDown();
  } else {
    readMoreButton.textContent = 'Show More';
    // readMoreText.style.display = 'none';
    $('.read-more-text').slideUp();
    }
});

$(".footer_powered_image").hide();

// ===========  Count down timer

// Set the date we're counting down to
var countDownDate = new Date("Feb 29, 2020 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We're Married!";
  }
}, 1000);