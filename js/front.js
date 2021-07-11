$('.slider').slick({
    autoplay:true,
    prevArrow:'<span type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></span>',
    nextArrow:'<span type="button" class="slick-prev"><i class="fa fa-chevron-right"></i></span>',
    dots: true,
    arrows: true
});

// play sound on click on humburger mnue ...
function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

// humburger mnue

const bar = document.querySelector('.humburger_btn');
const list = document.querySelector('.cen-list');

bar.onclick = function () {
    list.classList.toggle('open');
}
// add and remove the active class from li ...
$('.cen-list li').click(function() {
  $(this).addClass('active_link').siblings().removeClass('active_link');
});


// jump to top onclick home button ..
$("a[href='#home']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });

// scroll to top button ...**************************************************************************

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// *********************************************************************************************


// jump to the section useing jQuery ... 
// $('#myButton').click(function() {
//    $.scrollTo($('#myDiv'), 1000);
// });

// navbar scroll to top and down ...
// this code just for learn how to navbar work ...

//  $(document).ready(function(){
//       $(window).scroll(function() { // check if scroll event happened
//         if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
//           $(".navbar-fixed-top").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
//         } else {
//           $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
//         }
//       });
//     });

//     $(document).ready(function(){
//         $(window).scroll(function(){
//             if($(window).scrollTop() > $(window).height()){
//                 $(".menu").css({"background-color":"transparent"});   
//             }
//             else{
//                 $(".menu").css({"background-color":"white"});
//             }
    
//         })
//     });