window.onload = function () {

    //burger menu

    $('.nav__list').addClass('nav__mobile_hidden');
    $(".nav__mobile").click(function () {
        $('.nav__list').toggleClass('nav__mobile_hidden');
    });


    //modal win
    $('.button.card-button').click(function () {
        $('.modal-overlay').show()
    });

    $('.modal-window .button').click(function () {
        $('.modal-overlay').hide()
    });
    //

    $('.append').click(function(){
        console.log('hoi')
        $('.append').append($('.aside__ul'));
    })

    //modal sign-in
    $('.login.header-menu-btn').click(function(){
        $('.login__link').toggleClass('show')
        $('.login__win').toggleClass('show')
    })

    $('.modal__can').click(function () {
        //$(this).parent().hide();
        $('.modal').hide();
    })

    $('.reg_and_order').click(function(){
        $('.modal').show();
    })

    $('.phone__link').click(function(){
        $('.modal').addClass('modal_active');
        $('.modal').show();
    })

    //accordeon

    function accordion() {
        let links = document.getElementsByClassName('acco-link');

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function (e) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle('active')
            });
        }
    }

    accordion();




    //card colors


    function cardsColors() {
        let imgs = $('.card-col').find('img');
        let firstColors = $('.color:first-child img');

        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = firstColors[i].src;

        }

        let colors = document.getElementsByClassName('color');

        for (let i = 0; i < colors.length; i++) {

            colors[i].addEventListener('click', function (e) {
                let img = this.parentElement.nextElementSibling.firstChild;
                let thumb = this.firstChild;
                let thumbCached = this.firstChild;

                img.src = thumb.src;
            })
        }
    }
    cardsColors();

    function product() {
        let mainImg = $('.main-image > img');
        let thumb = $('.thumb-image img');

        for (let i = 0; i < thumb.length; i++) {
            thumb[i].addEventListener('click', function (e) {
                mainImg[0].src = this.src;
            })

        }
    }

    product();


    //input mask
    (function () {
        $("input[type='tel']").mask("+7999 - 999-99-99");
    })();

    (function () {
        $(".tab_item").not(":first").hide();
        $(".tab_wrapper .tab").click(function () {
            $(".tab_wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    })();


    //up to top
    (function () {
        if ($('.up').length) {
            var scrollTrigger = 1000, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.up').addClass('up_showed');
                    } else {
                        $('.up').removeClass('up_showed');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('.up').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    })();

    //tabs
    (function(){
        let tabsHead = $('.tab-head');
        let tabsBody = $('.tab-body');
        tabsHead.click(function(e){
            let tab = $(this);
            tabsHead.removeClass('tab-head_active');
            tab.toggleClass('tab-head_active');
            console.log(tabsHead.index($(this)))
            console.log(tabsBody.eq($(this)).index($(this)));
        })
    })();

    //delete item in cart
    (function () {
        $('.del').click(function(){
            $(this).parent().remove();
        })
    })();

    //aside
    (function () {
        $('.aside .aside__ul .aside__li').removeClass('aside_li_active');
        $('.aside .aside__ul .aside__li').click(function () {
            $(this).toggleClass('aside_li_active');
        })
    })();

    //catalog
    (function () {
        $('.section-catalog-page .catalog-page__card').removeClass('catalog-page_active');
        $('.catalog-page__card').click(function () {
            $(this).toggleClass('catalog-page_active');
        })
    })();

    //myorders
    (function () {
        //$('.section-orderslist .orderlist__order').removeClass('order_active');
        $('.section-orderslist .orderlist__order').click(function () {
            $(this).toggleClass('order_active');
        })
    })();

    //dropdown in header
    (function () {
        $(function () {

            $('.dropdown > .caption').on('click', function () {
                $(this).parent().toggleClass('open');
            });

            $('.dropdown > .list > .item').on('click', function () {
                $('.dropdown > .list > .item').removeClass('selected');
                $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($(this).text());
            });

            $(document).on('keyup', function (evt) {
                if ((evt.keyCode || evt.which) === 27) {
                    $('.dropdown').removeClass('open');
                }
            });

            $(document).on('click', function (evt) {
                if ($(evt.target).closest(".dropdown > .caption").length === 0) {
                    $('.dropdown').removeClass('open');
                }
            });

        });

        //padding after caption change
        (function () {
            $('.search_padding').css('padding-left', parseInt($('.search__filter').width()) + 20 + 'px');
            $('.search__filter .item').on('click', function () {
                setInterval(function () {
                    let caption = parseInt($('.search__filter').width()) + 20 + 'px';
                    $('.search_padding').css('padding-left', caption);
                },50);
            });
        })();
        
    })();

    


    


    //counter
    (function () {
        $('.counter__plus').click(function () {
            $(this).prev().get(0).value++;
        })
        $('.counter__minus').click(function () {
            $(this).next().get(0).value--;
        })
        // if ($('.counter > input').get(0).value <= 0) {
        //     console.log('retard alert class');
        // }
    })();


    $('.slider-1s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: false,
        nextArrow: false
    });
     $('.slider-1s-mcard').slick({
         asNavFor: '.slider-1s-mcard-min',
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         prevArrow: false,
         nextArrow: false,
         
     });
      $('.slider-1s-mcard-min').slick({
          asNavFor: '.slider-1s-mcard',
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
          prevArrow: false,
          nextArrow: false,
          responsive: [{
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
      });

    $('.slider-4s').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        responsive: [{
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // function roller($slider) {
    //     var $slider;
    //     var $progressBar = $('.progress');
    //     var $progressBarLabel = $('.slider__label');

    //     $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //         var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    //         $progressBar
    //             .css('background-size', calc + '% 100%')
    //             .attr('aria-valuenow', calc);

    //     });

    //     $slider.slick();
    // };
    // roller($('.slider-3s'));
    

    //roller
    (function () {

        
        var $slider = $('.slider-4s-wide');
        var $progressBar = $('.progress');
        var $progressBarLabel = $('.slider__label');

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc);

        });

        $progressBar.on('click', function () {
            console.log('clicked');
        })

        $slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 400,
            prevArrow: false,
            nextArrow: false,
            responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        });
    })();

    // $('.slider-4s-wide').slick({
    //     slidesToShow:4,
    //     slidesToScroll: 1,
    //     dots: false,
    //     prevArrow: false,
    //     nextArrow: false,
    //     responsive:[
    //         {
    //             breakpoint: 1301,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3
    //             }
    //         },
    //         {
    //             breakpoint: 961,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 761,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    $('.slider-3s').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-3s-controls').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

};