package edu.unimagdalena.testcrud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.testcrud.service.EstudianteService;

@RestController
@RequestMapping("/estudiante")
public class EstudianteController {
	@Autowired
	private EstudianteService estudianteService;
	
	
}
