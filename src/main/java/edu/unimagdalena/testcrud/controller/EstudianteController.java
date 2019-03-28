package edu.unimagdalena.testcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.testcrud.entity.Estudiante;
import edu.unimagdalena.testcrud.service.EstudianteService;

@RequestMapping("/estudiantes")
@RestController
public class EstudianteController {
	@Autowired
	private EstudianteService estudianteService;
	
	@RequestMapping
	public List<Estudiante> getEstudiantes() {
		return estudianteService.getAllEstudiantes();
	}
	
	@RequestMapping("/{id}")
	public Estudiante getEstudiantes(@PathVariable Long id) {
		return estudianteService.getEstudiante(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/add")
	public Estudiante addEstudiante(@RequestBody Estudiante estudiante) {
		return estudianteService.createEstudiante(estudiante);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value = "/delete")
	public void deleteEstudiante(@RequestBody long id) {
		estudianteService.deleteEstudiante(id);
	}

	@RequestMapping(method=RequestMethod.PUT, value = "/update")
	public Estudiante updateEstudiante(@RequestBody Estudiante estudiante) {
		return estudianteService.updateEstudiante(estudiante);
	}
}
