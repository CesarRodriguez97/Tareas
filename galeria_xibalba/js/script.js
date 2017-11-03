;
(function (d, w, n, c, $) {
  //Programación que se activa cuando el documento HTML ha cargado en el navegador
  $(d).ready(function () {
    //método que activa el la barra de navegación
    $(".button-collapse").sideNav()
  })
})(document, window, navigator, console.log, jQuery);