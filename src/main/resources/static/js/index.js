var editando; 

$(document).ready(function(){
	let request = $.ajax({
		  url: "estudiantes",
		  method: "GET"
		});
		 
	request.done(function(data) {
		data.forEach(function(e) {
			agregarTabla(e.id, e.nombre, e.apellido, e.codigo, e.edad);
		});
	});
	 
	request.fail(function( jqXHR, textStatus ) {
		M.toast({html: 'Falla a traer en la base de datos. code:'+jqXHR.status});
	});
		
  $('#boton').click(function(e){
	  e.preventDefault();
	  let nombre = $('#nombre').val();
	  let apellido = $('#apellido').val();
	  let codigo = $('#codigo').val();
	  let edad = $('#edad').val();
	  if(nombre != '' && apellido != '' && codigo != '' && edad != ''){
		  // ajax request
		  // $.post("/link",data, function(data,status){});
		  M.toast({html: 'Inscribiendo...'});
		  console.log({nombre, apellido, codigo, edad});
		  let estudiante = {
			  nombre,
			  apellido,
			  codigo,
			  edad
		  }
		  let request = $.ajax({
			  url: "estudiantes/add",
			  data: JSON.stringify(estudiante),
			  method: "POST",
			  contentType: "application/json",
			  dataType: 'json'
		  });
			 
			request.done(function(data) {
				agregarTabla(data.id, data.nombre, data.apellido, data.codigo, data.edad);
				M.toast({html: '¡Inscrito!'});
			});
			 
			request.fail(function( jqXHR, textStatus ) {
				M.toast({html: 'Fallo a inscribir. code:'+jqXHR.status});
			});
	  }
  });
  
  $('#editar').click(function(){
	  let nombre = $('#nombreEdit').val();
	  let apellido = $('#apellidoEdit').val();
	  let codigo = $('#codigoEdit').val();
	  let edad = $('#edadEdit').val();
	  if(nombre != '' && apellido != '' && codigo != '' && edad != ''){
		  // Ajax request
		  M.toast({html: 'Editando...'});
		  let estudiante = {
				  id:editando,
				  nombre,
				  apellido,
				  codigo,
				  edad
			  }
		  let request = $.ajax({
			  url: "estudiantes/update",
			  data: JSON.stringify(estudiante),
			  method: "PUT",
			  contentType: "application/json",
			  dataType: 'json'
		  });
			 
		  request.done(function(data) {
			  editarTabla(data.id, data.nombre, data.apellido, data.codigo, data.edad);
			  M.toast({html: '¡Editado!'});
		  });
			 
		  request.fail(function( jqXHR, textStatus ) {
			  M.toast({html: 'Fallo a editar. code:'+jqXHR.status});
		  });
	  }
  });
  
  $('select').formSelect();
  $('.modal').modal();

});
 
function editarTabla(id, nombre, apellido, codigo, edad){
	let markup = `<td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${codigo}</td><td>${edad}</td><td><i id="btn${id}" class="small material-icons modal-trigger btn-editar" href="#modal1">edit</i> <i id="del${id}" class="del red-text small material-icons">delete</i></td>`;
	$("tr[name='"+ id +"']").html(markup);
	$('#btn'+id).click(function(){
		editando = id;
		let tds = $("tr[name='"+ id +"'] > td");
		$('#nombreEdit').val(tds[1].innerHTML);
		$('#apellidoEdit').val(tds[2].innerHTML);
		$('#codigoEdit').val(tds[3].innerHTML);
		$('#edadEdit').val(tds[4].innerHTML);
		M.updateTextFields();
	});
	$('#del'+id).click(function(){
		// AJAX Request remove
		  M.toast({html: 'Eliminando...'});
		  let request = $.ajax({
			  url: "estudiantes/delete",
			  data: JSON.stringify(id),
			  method: "DELETE",
			  contentType: "application/json"
		  });
		  
		  request.done(function(data) {
			  $("tr[name='"+ id +"']").remove();
			  M.toast({html: '¡Eliminado!'});
		  });
			 
		  request.fail(function( jqXHR, textStatus ) {
			  M.toast({html: 'Fallo a eliminar. code:'+jqXHR.status});
			  console.log(jqXHR);
		  });
	});
}


function agregarTabla(id, nombre, apellido, codigo, edad){
	let markup = `<tr name="${id}"><td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${codigo}</td><td>${edad}</td><td><i id="btn${id}" class="small material-icons modal-trigger btn-editar" href="#modal1">edit</i> <i id="del${id}" class="del red-text small material-icons">delete</i></td></tr>`;
	$('#tablaEstudiantes tbody').append(markup);
	$('#btn'+id).click(function(){
		editando = id;
		let tds = $("tr[name='"+ id +"'] > td");
		$('#nombreEdit').val(tds[1].innerHTML);
		$('#apellidoEdit').val(tds[2].innerHTML);
		$('#codigoEdit').val(tds[3].innerHTML);
		$('#edadEdit').val(tds[4].innerHTML);
		M.updateTextFields();
	});
	$('#del'+id).click(function(){
		// AJAX Request remove
		  M.toast({html: 'Eliminando...'});
		  let request = $.ajax({
			  url: "estudiantes/delete",
			  data: JSON.stringify(id),
			  method: "DELETE",
			  contentType: "application/json"
		  });
		  
		  request.done(function(data) {
			  $("tr[name='"+ id +"']").remove();
			  M.toast({html: '¡Eliminado!'});
		  });
			 
		  request.fail(function( jqXHR, textStatus ) {
			  M.toast({html: 'Fallo a eliminar. code:'+jqXHR.status});
			  console.log(jqXHR);
		  });
	});
}