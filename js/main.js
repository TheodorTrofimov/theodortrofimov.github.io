feather.replace();

$('.main-blocks-angle-2').on('click', function () {
    $('.main-menu').toggleClass('active');
});

$('.welcome-servers-list').slick({
    slidesToShow: 3,
    centerMode: true,
    responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1199.98,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
});