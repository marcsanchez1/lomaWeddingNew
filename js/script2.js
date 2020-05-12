var i = 0;
var txt = 'Mr. & Mrs. Sanchez';
var speed = 100;
var intro = document.getElementById("intro");
$('#date').hide();


function heading() {
  if (i < txt.length) {
    intro.innerHTML += txt.charAt(i);
    i++;
    setTimeout(heading, speed);
  }
}

heading();
$('#date').delay(2000).slideDown();

