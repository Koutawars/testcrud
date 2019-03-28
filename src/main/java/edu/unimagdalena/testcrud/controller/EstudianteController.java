package edu.unimagdalena.testcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.testcrud.entity.Estudiante;
import edu.unimagdalena.testcrud.service.EstudianteService;

@RestController
@RequestMapping("/estudiantes")
public class EstudianteController {
	@Autowired
	private EstudianteService estudianteService;
	
	@RequestMapping("/")
	public List<Estudiante> getEstudiantes() {
		return estudianteService.getAllEstudiantes();
	}
	
	@RequestMapping("/{id}")
	public Estudiante getEstudiantes(@PathVariable float id) {
		return estudianteService.getEstudiante(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value = "/add")
	public void addEstudiante(@ModelAttribute Estudiante estudiante) {
		estudianteService.createEstudiante(estudiante);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value = "/delete")
	public void deleteEstudiante(@ModelAttribute float id) {
		estudianteService.deleteEstudiante(id);;
	}
}
