// H O R L O G E
setInterval(function () {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";
    if (hours >= 12) {
      period = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);

// C O M P T E U T   D E   M O T S
var print = function(msg) {

  document.getElementById("output").innerHTML = "length is" + msg;

}

document.getElementById("btn").onclick = function(event){

  print(document.getElementById("str").value.length);
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



// T O D O   L I S T
function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos
}

function add() {
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function clearDefault(a) {
  if (a.defaultValue==a.value) {a.value=""}

};

function remove() {
  var id = this.getAttribute('id');
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function show(){
  var todos = get_todos();

  var html = '<ul>';
  for(var i=0; i < todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
  };
  html += '</ul>';

  document.getElementById('todos').innerHTML = html;

  var buttons = document.getElementsByClassName('remove');
  for(var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  };
}

document.getElementById('add').addEventListener('click', add);
show();
















//
