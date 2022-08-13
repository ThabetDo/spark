/*----Currency----*/
$(".dropdown-item").click(function () {
    $("#currency").attr('data-text',$(this).attr('data-label'));
});

/*----Show Search----*/
$(".nav-item .fa-search ").click(function () {
    $(".search input").toggle(250);
    $(".searchIcon").toggleClass("fa-search").toggleClass("fa-plus fa-rotate-45");
});

/*----modal initialize----*/
//focus on first input field and hide signUp
$('#loginModal').on('shown.bs.modal', function () {
    $('#lEmail').trigger('focus');
    $('#signUpModal').modal('hide');
});
//focus on first input field and hide login
$('#signUpModal').on('shown.bs.modal', function () {
    $('#name').trigger('focus');
    $('#loginModal').modal('hide');
});

/*----Testimonials slick slider----*/
$('.responsiveSlid').slick({
    centerMode: true,
    centerPadding: '0',
    dots: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
        {
            breakpoint: 9999,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

/*----Animation with scrolling----*/
var wow = new WOW();
wow.init();
