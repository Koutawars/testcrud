  
$(document).ready(function(){
  $('#boton').click(function(e){
	  e.preventDefault();
	  let nombre = $('#nombre').val();
	  let apellido = $('#apellido').val();
	  let codigo = $('#codigo').val();
	  let edad = $('#edad').val();
	  if(nombre != '' && apellido != '' && codigo != '' && edad != ''){
		  // ajax request
		  console.log({nombre,apellido,codigo,edad});
	  }
	  
  });
  $('select').formSelect();
  $('.modal').modal();

});
  
function agregarTabla(id, nombre, apellido, codigo, edad){
	
	//$('#tablaEstudiantes tbody')
}