function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function h_open(){
  document.getElementById("highlight-details").style.display="block";
}

function h_close(){
  document.getElementById("highlight-details").style.display = "none";
}

var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e) {
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "-=" + step + "px"
  });
});

$(".next").bind("click", function(e) {
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "+=" + step + "px"
  });
});
