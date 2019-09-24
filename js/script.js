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
    readMoreText.style.display = 'block';
  } else {
    readMoreButton.textContent = 'Show More';
    readMoreText.style.display = 'none';
    }
});

// This is for the RSVP
// function addMessage() {
//   var msg = 'Welcome to';
//   var el = document.getElementById('message');
//   el.textContent = msg;
// }

// addMessage();

// function callMessage() {
//   el.textContent = newMessage;
//   return addMessage();
// }

$(".footer_powered_image").hide();