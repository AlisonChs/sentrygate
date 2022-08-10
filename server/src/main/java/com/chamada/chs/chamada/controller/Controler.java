package com.chamada.chs.chamada.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chamada.chs.chamada.model.AlunoModel;
import com.chamada.chs.chamada.model.HttpResponse;
import com.chamada.chs.chamada.service.AlunoService;

@RestController
@CrossOrigin(origins = "*")
public class Controler {

    @Autowired
    private AlunoService ps;

    /* Método para deletar via JSON do request
        @DeleteMapping("/deletar")
        public ResponseEntity<?> deletar(@RequestBody AlunoModel am) {
            return ps.remover(am.getRmAluno());
        }
     */

    @DeleteMapping("/deletar/{rmAluno}")
    public ResponseEntity<HttpResponse> deletar(@PathVariable long rmAluno) {
        return ps.remover(rmAluno);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody AlunoModel am) {
        return ps.cadastrarAlterar(am, "cadastrar");
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody AlunoModel am) {
        return ps.cadastrarAlterar(am, "alterar");
    }

    @GetMapping("/listar")
    public Iterable<AlunoModel> listar() {
        return ps.listar();
    }
    
    @GetMapping("/")
    public String rota() {
        return "Hello World";
    }

}
