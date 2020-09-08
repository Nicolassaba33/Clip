/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    var questions = [
        [
            "¿Que se utiliza para estilizar un sitio web?",
            "Javascript",
            "CSS",
            "PHP",
            "AngularJS",
            1
        ],
        [
            "¿Qué tipo de lenguaje es PHP?",
            "Interpretado",
            "Compilado",
            "Los 2 anteriores",
            "Ninguno de los anteriores",
            0
        ],
        [
            "¿jQuery es una biblioteca para qué lenguaje?",
            "Python",
            "PHP",
            "Java",
            "Ninguno de los anteriores",
            3
        ],
        [
            "¿Cómo se marca el inicio de código PHP?",
            "&lt;?php",
            "&lt;?",
            "Los 2 anteriores",
            "Ninguno de los anteriores",
            2
        ],
        [
            "¿Quién diseño Javascript?",
            "Mark Zuckerberg",
            "Bill Gates",
            "Brendan Eich",
            "Rasmus Lerdorf",
            2
        ],
    ];
    
        // La función restart inicializa los valores de las variables de estado del juego.
        
    });
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
