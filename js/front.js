$('.slider').slick({
    autoplay:true,
    prevArrow:'<span type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></span>',
    nextArrow:'<span type="button" class="slick-prev"><i class="fa fa-chevron-right"></i></span>',
    dots: true,
    arrows: true
});

// humburger mnue

const bar = document.querySelector('.humburger_btn');
const list = document.querySelector('.cen-list');
bar.onclick = function () {
    list.classList.toggle('open');
}