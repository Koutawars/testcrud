var editando; 

$(document).ready(function(){
  $('#boton').click(function(e){
	  e.preventDefault();
	  let nombre = $('#nombre').val();
	  let apellido = $('#apellido').val();
	  let codigo = $('#codigo').val();
	  let edad = $('#edad').val();
	  if(nombre != '' && apellido != '' && codigo != '' && edad != ''){
		  // ajax request
		  // $.post("/link",data, function(data,status){});
		  // M.toast({html: 'Inscribiendo...'});
		  console.log({nombre,apellido,codigo,edad});
		  agregarTabla(0, nombre, apellido, codigo, edad);
	  }
	  
  });
  
  $('#editar').click(function(){
	  let nombre = $('#nombreEdit').val();
	  let apellido = $('#apellidoEdit').val();
	  let codigo = $('#codigoEdit').val();
	  let edad = $('#edadEdit').val();
	  if(nombre != '' && apellido != '' && codigo != '' && edad != ''){
		  // Ajax request
		  // M.toast({html: 'Editando...'});
		  editarTabla(editando, nombre, apellido, codigo, edad);
	  }
  });
  
  $('select').formSelect();
  $('.modal').modal();

});
 
function editarTabla(id, nombre, apellido, codigo, edad){
	let markup = `<td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${codigo}</td><td>${edad}</td><td><a id="btn${id}" class="waves-effect waves-light btn modal-trigger" href="#modal1">Editar</a></td>`;
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
}


function agregarTabla(id, nombre, apellido, codigo, edad){
	let markup = `<tr name="${id}"><td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${codigo}</td><td>${edad}</td><td><a id="btn${id}" class="waves-effect waves-light btn modal-trigger" href="#modal1">Editar</a></td></tr>`;
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
}