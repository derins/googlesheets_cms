
// function myFunction() {
//     document.getElementsByClassName("loader")[0].setAttribute("class", "none");
// }

// function loader() {
//   $(window).bind("load", function() {
//     $(".loader").fadeOut();
//     // code goes here
// });
// }

$(document).ready(function () {

  // preloader
  $(window).load(function(){
    $('.loader').fadeOut();
    $('#preloder').fadeOut(500);
  })

})


$(document).ready(function () {

  // preloader
  $(window).load(function(){
    $('.loader-tour').delay(3500).fadeOut();
    $('#preloder-tour').delay(4000).fadeOut(500);
  })

})
