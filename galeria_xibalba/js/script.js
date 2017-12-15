;
(function (d, w, n, c, $) {
  //Programación que se activa cuando el documento HTML ha cargado en el navegador
  $(d).ready(function () {
    //método que activa el la barra de navegación
    $(".button-collapse").sideNav({
        edge: 'right'
    })
  })
})(document, window, navigator, console.log, jQuery);

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

$(document).ready(function(){
      $('.parallax').parallax();
  });