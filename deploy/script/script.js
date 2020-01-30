// Menu animation

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})

$(document).ready(function () {
    $(".menu i").click(function () {
        $("nav ul").toggleClass("active");
    })
})

//Scroll animation

$('nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault;

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }

})

//modal popup button1

document.querySelector('.popup-1').addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.add('active');

})
document.querySelector('span.hide').addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.remove('active');

})

//modal popup button2


document.querySelector('.popup-cld').addEventListener("click", function () {
    document.querySelector('.modal-wrap1').classList.add('active');

})
document.querySelector('span.hide1').addEventListener("click", function () {
    document.querySelector('.modal-wrap1').classList.remove('active');

})

//modal popup button3


document.querySelector('.popup-fed').addEventListener("click", function () {
    document.querySelector('.modal-wrap2').classList.add('active');

})
document.querySelector('span.hide2').addEventListener("click", function () {
    document.querySelector('.modal-wrap2').classList.remove('active');

})

//modal popup button4


document.querySelector('.popup-sa').addEventListener("click", function () {
    document.querySelector('.modal-wrap3').classList.add('active');

})
document.querySelector('span.hide3').addEventListener("click", function () {
    document.querySelector('.modal-wrap3').classList.remove('active');

})

//modal popup button5


document.querySelector('.popup-net').addEventListener("click", function () {
    document.querySelector('.modal-wrap4').classList.add('active');

})
document.querySelector('span.hide4').addEventListener("click", function () {
    document.querySelector('.modal-wrap4').classList.remove('active');

})