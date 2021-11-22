$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
    $('.sub-mobile-icon').on('click', function() {
        $('.heading-mobile').fadeToggle(300)
        $('.heading-overlay').hide()
    })
    $('.mobile-menu-btn').on('click', function() {
        $('.heading-overlay').show()
        $('.heading-mobile').fadeToggle(300)
    })
    $('.nav-link').on('click', function() {
        $('.heading-mobile').fadeToggle(300)
        $('.heading-overlay').hide()
    })
});
