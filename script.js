// C A L C U L E T T E

var couleur =







// D I G I T A L   C L O C K
setInterval(function () {
  var currentTime = new Date();
  var year  = currentTime.getYear() + 1900;
  var day = currentTime.getDay();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var milliseconds = currentTime.getMilliseconds();
  var period = "AM";
    if (hours >= 12) {
      period = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }
    if (hours < 10){
      hours = "0" + hours
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (milliseconds < 100 ){
      milliseconds = "0" + milliseconds
    }
    if (milliseconds < 10){
      milliseconds = "0" + milliseconds
    }



  if (day = 0){
  (day = "Monday")
    } else if
    (day = 1){
    day = "Tuesday"}
      else if
      (day = 2){
      day = "Wednesday"}
        else if
        (day = 3){
        day = "Thursday"}
          else if
          (day = 4){
          day = "Friday"}
            else if
            (day = 5){
            day = "Saturday"}
              else
              (day = 6)
              day = "Sunday"




    var clockTime = year + ":" + day + ":" + hours + ":" + minutes + ":" + seconds + ":" + milliseconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 10);











// C O M P T E U T   D E   M O T S
var print = function(msg) {

  document.getElementById("output").innerHTML = "length is " + msg;

}

document.getElementById("btn").onclick = function(event){
var z = 10
if (document.getElementById("str").value.length < z) {
  alert('Vous devez saisir au moins 10 characters')
}else {
  print(document.getElementById("str").value.length);
 }
}


// F O R M U L A I R E
$(document).ready(function () {
  function init () {
  if (localStorage["name"]) {
    $('#name').val(localStorage["email"]);
  }
  if (localStorage["email"]) {
    $('#email').val(localStorage["email"]);
  }
  if (localStorage["message"]) {
    $('#message').val(localStorage["message"]);
}
}
init();
});

$('.stored').change(function() {
  localStorage[$(this).attr('name')] = $(this).val();
});

// S L I D E R
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}

function showDivs(n){
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i =0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}














//
// let speed = 300;
// let amount = 3;
//
// let scroll = 0;
// let smooth = 0;
// let diff = 0;
//
// $(document).on('scroll', (event) => {
//   scroll = $(window).scrollTop();
// })
//
// let oldTime = null;
// let delta = 0;
//
// const animate =  (t) =>{
//   if (oldTime)
//     delta = t - oldTime
//   smooth += (scroll - smooth) * delta / speed;
//   diff = scroll - smooth;
//
//   let translateCenter = diff * -2/amount;
//   let translateRed = diff * 3/amount;
//   let translateGreen = diff * 2/amount;
//   let translateBlue = diff * 1/amount;
//
//   $('.center').css('transform', 'translateY('+translateCenter+'px)')
//   $('.r').css('transform', 'translateY('+translateRed+'px)')
//   $('.g').css('transform', 'translateY('+translateGreen+'px)')
//   $('.b').css('transform', 'translateY('+translateBlue+'px)')
//
//   oldTime = t;
//   requestAnimationFrame(animate)
// }
//
// requestAnimationFrame(animate)
//
//
//
//
// //
