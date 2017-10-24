.controller("primercontro", function($scope, $http){
$scope.posts = [];
$http.get("http://jsonplaceholder.typicode.com/posts")
.success(function(data){
  console.log(data);
  $scope.posts = data;
})
.error(function(err){

});
$scope.addPost = function(){
  $http.post("http://jsonplaceholder.typicode.com/posts")
  .success(

  )
  .error();
}





<script>
$(document).on('ready',function (){
  $.get('hola.html', function(data){
    $('#receptor').html(data);
  });
});
</script>

$.get('hola.html', function(data){
  $('#receptor').html(data);
});

$('#boton').on('click', function(){
  $('#ejemplo').fadeOut(2000);
});

var elem = $('#caja1');
$('#btn1').click(function(){
  //mostrar elemento

});
$('#btn2').click(function(){
  //ocultar elemento

};)


$("#miInput").on('cambio', function(ev, id){
  console.log(id);
  if (this.checked) {
    $("#miInput").removeAttr('checked');
    $('.cambiar').text('Encender');
  } else {
    $("#miInput").attr('checked','checked');
    $('.cambiar').text('Apagado');
  }
});
$('.cambiar').on('click',function(){
  $("#miInput").trigger('cambio',[$(this).attr('id')]);
});



$('#caja1').mouseover(function(){
  $(this).css('background','red')
})
$('#caja1')

//introduccion a evento #21
$('a').on("click", function(e){
  e.preventDefault();
  e.pageX;
  console.log($(this).attr('id'));
});



// para seleccionar el siguiente del tutorial de codigo facilito numero 17
$('#primero').next().text()

$('#test').parent().text()

console.log();

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
