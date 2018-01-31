/*!
 * public/js/project.js
 * 
 * Copyright(c) 2017 @project-name
 * Author: @author
 * Date: @date
 */

(function($, location) {
    "use strict";
    
    var navbarHeight = $('nav').height();

    // Smooth scrolling
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('body').scrollspy('dispose');
                $('html, body').animate({
                    scrollTop: (target.offset().top - navbarHeight)
                }, 1000, "easeInOutExpo", setBodyScrollSpy);
                return false;
            }
        }
    });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    function setBodyScrollSpy() {
       $('body').scrollspy({ target: '#main-nav', offset: navbarHeight });
    }
    
    setBodyScrollSpy();
    
    $(window).scroll(function () {
        var $navbar = $("nav.fixed-top");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > $navbar.height());
    });
    
    $('#navbar-target').on('show.bs.collapse', function () {
        $("nav.fixed-top").addClass('collapsed');
    });
    
    $('#navbar-target').on('hide.bs.collapse', function () {
        $("nav.fixed-top").removeClass('collapsed');
    });
    
})(jQuery, window.location)
