
var contadorR = 0;    
var respuesta = 0;
var respuestaCorrecta = 1976; 
var intentosRestantes = 3;

function contadorRestantes(){
    

    
}
function contadorDeIntentos(){
    contadorRestantes();
    contadorR++;
    respuesta = parseInt(document.getElementById("respuestaObtenida").value) ;
    if(respuesta === this.respuestaCorrecta){
        var html ="";
        document.getElementById("botonIntento").disabled="true";
        document.getElementById("respuestaObtenida").disabled="true";
        html+=`<h5>¡Felicitaciones, es correcto!</h5> <h5>`;
        document.getElementById("pistasDar").innerHTML = html;


    }
    else{
    this.darPistas();
    }
};

function darPistas(){
    var html ="";
    if(this.contadorR === 1) {
        html+=`<h4>Primer pista:  </h4><h5>Acontecio en el siglo XX</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR === 2 ) {
        html+=`<h4>Segunda pista:  </h4><h5>Acontecio entre los años 60 y 80</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR <= 3) {
        document.getElementById("botonIntento").disabled="true";
        document.getElementById("respuestaObtenida").disabled="true";
        html+=`<h5> Perdiste para mas informacion ingrese  <a href="https://es.wikipedia.org/wiki/Apple#:~:text=El%201%20de%20abril%20de,Wayne%20vende%20sus%20acciones%20por">aqui</a> </h5>`;
    
        document.getElementById("pistasDar").innerHTML = html;
    }

    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

}
