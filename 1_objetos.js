;
/*
  Se utiliza para un comentario de varias líneas.
*/

// Comentario de una sola línea.

//Definición o declaración
function saludo (nombre = 'ICONOS') {
//Interpolación de variables
//alert(`Hola, ${nombre}`)
}

//Invocación o ejecución
//saludo('amiguitos míos')
//saludo()
;

/*Es bueno encapsular el código de una función anónima autoejecutable para evitar problemas en el código.*/

(function (d, w) {
  //alert(d)
  //alert(w)
  //alert('Hola')
  //console.log(d, w, 'Hola')
})(document, window);

// Objetos Literales
(function (c) {
  c('*****Objetos Literales*****')

/* Para declarar una variable en JavaScript se utilizaba antes la palabra 'var'. Ahora usamos 'const' o 'let' para declarar las variables */

/* Los objetos en JavaScript son una recopilaciòn o conjunto de propiedades las cuales poseen sus respectivos valores. Esas propiedades son llamadas atributos o métodos. */
  
  const encendedor = {
    tamaño: 'compacto',
    peso: 'medio',
    material: 'metálico',
    modelo: 'Zippo',

    iluminar: function () {
      c('oscuridad')
    },
    quemar: function (objeto = 'papel') {
      c(`${this.modelo} quema ${objeto}`)
    }, 
    almacenar: function (){
      c('gasolina')
    },  
    aparecer: function (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  c(
    encendedor,
    encendedor.tamaño,
    encendedor.peso,
    encendedor.material,
    encendedor.modelo
  )

  encendedor.iluminar()
  encendedor.quemar()
  encendedor.quemar('madera')
  encendedor.almacenar()
  encendedor.aparecer('http://www.geostore.es/2525-thickbox_default/encendedor-zippo-classic-khaki.jpg')
  
})(console.log);

// Clases 
(function (c) { 
     c('*****Clases*****')
  class Encendedor {
/*El constructor es un método, el cual se ejecuta en el momento de instanciar la clase*/
  constructor (tamaño, peso, material,modelo) {
      this.tamaño = tamaño
      this.peso = peso
      this.material = material
      this.modelo = modelo
    }
      
    iluminar () {
      c('oscuridad')
    }

    quemar (objeto = 'papel') {
      c(`${this.modelo} quema ${objeto}`)
    }
      
    almacenar () {
      c('gasolina')
    }

    aparecer (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  /*La palabra new permite generar o instanciar un objeto de un tipo determinado de la clase.*/
    
  const Picas = new Encendedor('compacto', 'ligero', 'cromado', 'Bladeplay')
  const Elegante = new Encendedor('compacto', 'pesado', 'oro', 'Kuboy')

  c(
    Picas,
    Picas.tamaño,
    Picas.peso,
    Picas.material,
    Picas.modelo,
    Elegante,
    Elegante.tamaño,
    Elegante.peso,
    Elegante.material,
    Elegante.modelo,
  )

  Picas.iluminar()
  Picas.quemar()
  Picas.almacenar()
  Picas.aparecer('https://www.bladeplay.com/imgs/shop-by-brand/all-zippo-lighters/zippo-28323-ace-filigree-jm-large.jpg')

  Elegante.iluminar()
  Elegante.quemar()
  Elegante.almacenar()
  Elegante.aparecer('http://www.ozmagazine.com.mx/wp-content/uploads/2017/03/e8a2270b02bb3d18b90105d41f01e8f3.jpg')
})(console.log);
