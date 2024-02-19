$(function () {


    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);
        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });


      


    $('.pop_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.notice .tap_menu li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.notice .con_list .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_sns .menu_list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.main_sns .con_list .con').eq(idx).addClass('on').siblings().removeClass('on');
        $('.main_sns .con_list .con').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.site strong').on('click', function () {
        $(this).toggleClass('on');
        // $(this).next().toggleClass('on');
        $(this).next().slideToggle();
    });

});


const MAIN_NOTICE_SLIDE = new Swiper(".main_notice_slide", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
  });

const MAIN_MS_LEFT_BUTTON = document.querySelector(
    ".main_banner .main_customer_arrows .left"
  );
  
  MAIN_MS_LEFT_BUTTON.addEventListener("click", () => {
    MAIN_NOTICE_SLIDE.slidePrev();
  });
  
  const MAIN_MS_RIGHT_BUTTON = document.querySelector(
    ".main_banner .main_customer_arrows .right"
  );
  
  MAIN_MS_RIGHT_BUTTON.addEventListener("click", () => {
    MAIN_NOTICE_SLIDE.slideNext();
  });