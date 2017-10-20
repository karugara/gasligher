//una forma de empezar con jqueyr antigua
    $(document).ready(function(){


    });
//2da forma de empezar con jquey a partir de jquery 1.7
    $(document).on('ready',function (){




    });
//3ra forma de seguir con jquery mas avanzado
    $(function (){

    });

// funciona tranquilament con las 3 formas de declarar el jquery
    $(document).on('ready',function (){
    $('#prueba').text('<p>Hola mundo!</p>');
    $('.prueba').html('<strong>Estoy usando JQUERY</strong>')



    });

    $(document).ready(function(){
      $('#prueba').text('<p>Hola mundo!</p>');
      $('.prueba').html('<strong>Estoy usando JQUERY</strong>')

    });

    $(function (){
      $('#prueba').text('<p>Hola mundo!</p>');
      $('.prueba').html('<strong>Estoy usando JQUERY</strong>')
    });
