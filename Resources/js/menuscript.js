//Script para cerrar el menu en dispositivos pequeños
$('.navbar-nav li a').on('click', function(){
  if(!$( this ).hasClass('dropdown-toggle')){
    $('.navbar-collapse').collapse('hide');
  }
});

$(document).on("click",function(e) {
var containr = $("#container");
  if (!containr.is(e.target) && containr.has(e.target).length === 0) {
     $('.navbar-collapse').collapse('hide');
  }
});
//Se cierra el script

