/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            // Place your code here.



            $(window).load(function() {
                $('#loading').fadeOut("slow");

$("#block-menu-menu-footer-icon .menu .menu__item a").html("<p></p>");


            });





            jQuery(window).load(function() {
                //responsive-menu----------------------------------------------------------------------------
                $(".responsive-menu").prepend("<div class='bar'></div>");
                $(".responsive-menu").click(function() {
                    $(this).toggleClass("menu-expanded");
                });


//front-product-masonry

                $('.product-block').masonry({
                    // options...
                    itemSelector: '.views-row',
                    columnWidth: 1,
                    //gutter:10,

                });

            })


            //responsive-menu-color

            $(window).scroll(function() {
                if ($(window).scrollTop() > 100)
                    $(".responsive-menu").css("background", "rgba(255, 255, 255, 0.75)");
                else
                    $(".responsive-menu").css("background", "none");
            });

            //smoke--------------------------
            $("#block-revslider-1").prepend("<div class='smoke smoke-odd s1'></div>");
            $("#block-revslider-1").prepend("<div class='smoke smoke-even s2'></div>");
            $("#block-revslider-1").prepend("<div class='smoke smoke-odd s3'></div>");
            $("#block-revslider-1").prepend("<div class='smoke smoke-even s4'></div>");
            $("#block-revslider-1").prepend("<div class='smoke smoke-odd s5'></div>");
            $("#block-revslider-1").prepend("<div class='smoke smoke-even s6'></div>");


            // $(".s1").animate({
            //     bottom: "100%",
            //     opacity: "100",
            // }, 20000, function() {});

            // function start() {
            //     $(".s2").animate({
            //         bottom: "100%",
            //         opacity: "100",
            //     }, 25000, start);
            // }





            $(document).ready(function() {
                $("body").addClass("animated fadeIn");
                $(".logged-in").removeClass("animated fadeIn");
                $(".view-products .views-row").addClass("animated fadeIn")
                    //$(".view-shop-page .views-row-odd").addClass("animated slideInLeft")
                    //$(".view-shop-page .views-row-even").addClass("animated slideInRight")
                $(".view-products .views-row").addClass("animated fadeIn")
                $(".view-about-us .views-row-even").addClass("animated slideInRight")
                $(".view-about-us .views-row-odd").addClass("animated slideInLeft")






                



                //fix效果

                //首頁店家資訊-----------------------------------------
                if (window.innerWidth <= 768) {
                    if (window.innerWidth >= 480) {
                        var $scrollingDiv1 = $(".front .view-shop-page"); // #scrollingDiv請改成自己要移動的元素
                        $(window).scroll(function() {
                            if ($(window).scrollTop() < 800)
                                $scrollingDiv1
                                .stop()
                                .animate({
                                    "marginTop": ($(window).scrollTop() + 30) + "px"
                                }, "slow");
                        });
                    }
                }

                //最新消息店家資訊-----------------------------------------------------
                if (window.innerWidth <= 768) {
                    if (window.innerWidth >= 480) {
                        var $scrollingDiv = $(".page-latest-news .view-shop-page"); // #scrollingDiv請改成自己要移動的元素
                        $(window).scroll(function() {
                            $scrollingDiv.css({
                                'position': 'absolute',
                            });
                            $scrollingDiv
                                .stop()
                                .animate({
                                    "marginTop": ($(window).scrollTop() + 10) + "px"
                                }, "slow");


                        })
                    }
                }







                //視差----------
var block_image_url = $(".banner-block img").attr('src');

                $('.banner-block').parallax({
                    imageSrc: block_image_url
                });
                
                $(".not-front #content-top .banner-block img").css("opacity", "0");



                //          $('.group-right .field-name-body p').textillate({ in: { effect: 'rollIn' } });
                // $('.group-right .field-name-body p').textillate({
                //  initialDelay: 1000,   //设置动画开始时间
                //  in: { effect: 'flipInX' //设置动画名称
                //  }
                // });



                $('.node-products .field-name-body p').textillate({
                    initialDelay: 1000,
                    in : {
                        effect: 'flipInX'
                    }
                });




                //hover effect1

                $(" .row-effect").hover(function() {
                    $(this).toggleClass("row-effect-ios");
                });




                {

                }

            });



        }
    };


$(document).ready(function() {

        $("#webform-client-form-1").submit(function() {

           $(".form-actions").html("<p>loading.......</p>");

        });

    });


})(jQuery, Drupal, this, this.document);
