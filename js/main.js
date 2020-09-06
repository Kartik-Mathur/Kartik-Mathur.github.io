/*
   Template Name: StudyLab - Kid & Online Education HTML Template
   Author: ThemeLeader
   Author URI: https://themeforest.net/user/themeleaderf
   Description: StudyLab - Kid & Online Education HTML Template
   Version: 1.0
*/
/* 
---> Table of content <---
1. Isotope
2. Main slider
3. Counter UP
4. Magnific Popup
5. Testimonial slider
6. Testimonial Classic Slider
7. Magnific Image Popup
8. Partner Slider
9. Service Slider
10. Team Slider
11. Contact form
12. Back to top
13. Sticky header
---><---
*/

jQuery(function($) {
    "use strict";

    /* On Load Function */
    $(window).on('load', function() {

        /*-----------------------------------------
                     Portfolio Filter
        -------------------------------------------*/

        var $grid = $('.grid').isotope({
            getSortData: {
                courseName: '.courseName',
                courseMentor: '.courseMentor',
                coursePrice: '.coursePrice',
                category: '[data-category]',
                weight: function(itemElem) {
                    var weight = $(itemElem).find('.weight').text();
                    return parseFloat(weight.replace(/[\(\)]/g, ''));
                }
            }
        });

        /* portfolio Filter */
        if ($('.portfolio-menu').length > 0) {
            // filter items on button click
            $('.portfolio-menu').on('click', 'li', function() {
                $('.portfolio-menu li').removeClass('active');
                $(this).addClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
        }

        /* Categories filter */
        if ($('.filter-select').length > 0) {
            // filter items on button click
            $('.filter-select').on('change', function() {
                var filterValue = this.value;
                $grid.isotope({
                    filter: filterValue,
                });
            });
        }

        /* Categories Sorting */
        if ($('.sort-select').length > 0) {
            // bind sort button click
            $('.sort-select').on('change', function() {
                var sortValue = this.value;
                $grid.isotope({
                    sortBy: sortValue
                });
            });
        }

    }); //On Load Function end


    /* Document Ready Function */
    $(document).ready(function() {
        /* MY JAVASCRIPT CODE*/

        $('.login-modal').load('login-details-modal.html');

        

        $('input').each(function(e) {
            $(this).attr('autocomplete', 'off');
            $(this).attr('autocorrect', 'off')
        });
        $(document).contextmenu(function() {
            return true;
        });

        /* Li Active Class */
        // Get current page URL
        var url = window.location.href;
        // remove # from URL
        url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
        // remove parameters from URL
        url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
        // select file name
        url = url.substr(url.lastIndexOf("/") + 1);
        // If file name not avilable
        if (url == '') {
            url = 'index.html';
        }
        // Loop all menu items
        $('.navbar-nav li').each(function() {
            // select href
            var href = $(this).find('a').attr('href');
            // Check filename
            if (url == href) {
                // Select parent class
                var parentClass = $(this).parent('ul').attr('class');
                if (parentClass == 'dropdown-menu') {
                    // Add class
                    $(this).addClass('active');
                    $(this).parents('.navbar-nav li').addClass('active');
                } else {
                    // Add class
                    $(this).addClass('active');
                }
            }
        });

        /* Select 2 JS */
        if ($('.filter-group .form-group .form-control').length > 0) {
            $('.filter-group .form-group .form-control').select2();
        }
        if ($('#country').length > 0) {
            $('#country').select2();
        }


        /*-----------------------------------------
                       Menu Toggle
        -------------------------------------------*/

        if ($(window).width() < 991) {
            $(".navbar-nav li a").on("click", function() {
                $(this).parent("li").find(".dropdown-menu").slideToggle();
                $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
            });
        }

        /*-----------------------------------------
                       Main Slider
        -------------------------------------------*/
        if ($('.tl-slider-carousel').length > 0) {
            $('.tl-slider-carousel').owlCarousel({
                items: 1,
                smartSpeed: 900,
                loop: true,
                nav: true,
                dots: false,
                autoplay: true,
                mouseDrag: true,
                navText: ['<i class="icon icon-chevron-left"></i>', '<i class="icon icon-chevron-right"></i>'],
                responsive: {
                    0: {
                        nav: false,
                        mouseDrag: false,
                    },
                    600: {
                        nav: false,
                        mouseDrag: false,
                    },
                    1000: {
                        nav: true,
                        mouseDrag: true,
                    },
                }
            });
        } //Main Slider End


        /*-----------------------------------------
                    Counter up
        -------------------------------------------*/

        if ($('.counter-up').length > 0) {
            $('.counter-up').counterUp({
                delay: 10,
                time: 1000
            });
        }

        /*-----------------------------------------
                    Magnific Popup
        -------------------------------------------*/

        if ($('.video-play-btn').length > 0) {
            $('.video-play-btn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,

                fixedContentPos: false
            });
        }

        if ($('.modal-popup').length > 0) {
            $('.modal-popup').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: false,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "tl-mfp-bg"
                    }
                }
            });
        }

        /*-----------------------------------------
                    Testimonial Slider
        -------------------------------------------*/

        if ($('.testimonail-single-slider').length > 0) {
            $('.testimonail-single-slider').owlCarousel({
                items: 1,
                loop: true,
                smartSpeed: 900,
                nav: false,
                dots: true,
                autoplay: true,
                mouseDrag: true,
                responsive: {
                    0: {
                        mouseDrag: false,
                        dots: false,
                    },
                    600: {
                        mouseDrag: false,
                        dots: false,
                    },
                    1000: {
                        mouseDrag: true,
                        dots: true,
                    },
                }
            });
        }

        /*-----------------------------------------
                    Testimonial Classic Slider
        -------------------------------------------*/

        if ($('.testimonial-classic-carousel').length > 0) {
            $('.testimonial-classic-carousel').owlCarousel({
                items: 2,
                loop: true,
                smartSpeed: 900,
                nav: false,
                autoplay: true,
                dots: true,
                mouseDrag: true,
                responsive: {
                    0: {
                        items: 1,
                        mouseDrag: false,
                    },
                    600: {
                        items: 1,
                        mouseDrag: false,
                    },
                    1000: {
                        items: 2,
                        mouseDrag: true,
                        dots: true,
                    },
                }
            });
        }

        /*-----------------------------------------
                    Magnific Image Popup
        -------------------------------------------*/

        // if ($('.element-item').length > 0) {
        //    $('.element-item').magnificPopup({
        //       delegate: 'a',
        //       type: 'image',
        //       tLoading: 'Loading image #%curr%...',
        //       mainClass: 'mfp-img-mobile',
        //       gallery: {
        //          enabled: true,
        //          navigateByImgClick: true,
        //          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        //       },
        //       image: {
        //          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        //          titleSrc: function (item) {
        //             // return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        //          }
        //       }
        //    });
        // }


        /*-----------------------------------------
                    Partner Slider
        -------------------------------------------*/

        if ($('.partner-carousel').length > 0) {
            $('.partner-carousel').owlCarousel({
                items: 4,
                loop: true,
                smartSpeed: 900,
                nav: false,
                dots: false,
                autoplay: true,
                mouseDrag: true,
                responsive: {
                    0: {
                        items: 1,
                        mouseDrag: false,
                    },
                    600: {
                        items: 2,
                        mouseDrag: false,
                    },
                    1000: {
                        items: 4,
                        mouseDrag: true,
                    },
                }
            });
        }


        /*-----------------------------------------
                    Service Slider
        -------------------------------------------*/

        if ($('.service-carousel').length > 0) {
            $('.service-carousel').owlCarousel({
                items: 4,
                loop: true,
                smartSpeed: 900,
                nav: false,
                margin: 30,
                dots: true,
                autoplay: true,
                mouseDrag: true,
                responsive: {
                    0: {
                        items: 1,
                        mouseDrag: false,
                        dots: false,
                    },
                    600: {
                        items: 2,
                        mouseDrag: false,
                        dots: false,
                    },
                    1000: {
                        items: 4,
                        mouseDrag: true,
                        dots: true,
                    },
                }
            });
        }


        /*-----------------------------------------
                    Team Slider
        -------------------------------------------*/

        if ($('.team-carousel').length > 0) {
            $('.team-carousel').owlCarousel({
                items: 4,
                loop: true,
                smartSpeed: 900,
                nav: true,
                navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
                margin: 30,
                dots: false,
                autoplay: true,
                mouseDrag: true,
                responsive: {
                    0: {
                        items: 1,
                        mouseDrag: false,
                        dots: false,
                    },
                    600: {
                        items: 2,
                        mouseDrag: false,
                        dots: false,
                    },
                    1000: {
                        items: 4,
                        mouseDrag: true,
                        dots: true,
                    },
                }
            });
        }

        /*-----------------------------------------
                    Contact Form
        -------------------------------------------*/

        $('#contact-form').submit(function() {

            var $form = $(this),
                $error = $form.find('.error-container'),
                action = $form.attr('action');

            $error.slideUp(750, function() {
                $error.hide();

                var $name = $form.find('.form-name'),
                    $email = $form.find('.form-email'),
                    $subject = $form.find('.form-subject'),
                    $message = $form.find('.form-message');

                $.post(action, {
                        name: $name.val(),
                        email: $email.val(),
                        url: $subject.val(),
                        message: $message.val()
                    },
                    function(data) {
                        $error.html(data);
                        $error.slideDown('slow');

                        if (data.match('success') != null) {
                            $name.val('');
                            $email.val('');
                            $subject.val('');
                            $message.val('');
                        }
                    }
                );

            });

            return false;

        });


        /*-----------------------------------------
                    Countdown Timer
        -------------------------------------------*/

        if ($('#countdown-clock').length > 0) {
            $('#countdown-clock').countdown('2020/10/10', function(event) {
                var $this = $(this).html(event.strftime('' +
                    '<div class="counter-time"><span class="hour">%H</span><span class="time-name">Hours</span></div>' +
                    '<div class="counter-time"><span class="minute">%M</span><span class="time-name">Minutes</span></div>' +
                    '<div class="counter-time"><span class="minute">%S</span><span class="time-name">Second</span></div>'
                ));
            });
        }

        /*-----------------------------------------
                       Parallax JS
        -------------------------------------------*/

        if ($('#scene').length > 0) {
            var scene = $('#scene').get(0);
            var parallaxInstance = new Parallax(scene, {
                relativeInput: true,
            });
            parallaxInstance.friction(0.2, 0.2);;
        }

        /*-----------------------------------------
                    Back to top
        -------------------------------------------*/

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-to-top').on('click', function() {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('hide');


        /* ---------------------------------------------
                       Sticky Header 
        ------------------------------------------------ */

        var toggleAffix = function(affixElement, scrollElement, wrapper) {

            var height = affixElement.outerHeight(),
                top = wrapper.offset().top;

            if (scrollElement.scrollTop() >= top) {
                wrapper.height(height);
                affixElement.addClass("affix");
            } else {
                affixElement.removeClass("affix");
                wrapper.height('auto');
            }

        };
        $('[data-toggle="affix"]').each(function() {
            var ele = $(this),
                wrapper = $('<div></div>');

            ele.before(wrapper);
            $(window).on('scroll resize', function() {
                toggleAffix(ele, $(this), wrapper);
            });

            // init
            toggleAffix(ele, $(window), wrapper);
        });

        /* WoW Init */
        new WOW().init();

    }); //Document Ready Function End

});

$(() => {
    $('.prevent-scroll').click((ev) => {
        ev.preventDefault()
        alert('This will come soon!!')
    })
})