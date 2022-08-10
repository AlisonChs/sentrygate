package com.chamada.chs.chamada.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.chamada.chs.chamada.model.AlunoModel;
import com.chamada.chs.chamada.model.HttpResponse;
import com.chamada.chs.chamada.repository.AlunoRepository;

import lombok.Data;

@Service
@Data
public class AlunoService {
    
    @Autowired
    private AlunoRepository pr;

    @Autowired
    private HttpResponse rm;

    // Metódo para listar alunos
    public Iterable<AlunoModel> listar() {
        return pr.findAll();
    }

    // Método temporário para cadastrar ou alterar alunos 
    public ResponseEntity<?> cadastrarAlterar(AlunoModel am, String acao) {

        if(am.getRmAluno().equals(null)) {

            rm.setMensagem("Insira um RM válido!");
            return new ResponseEntity<HttpResponse>(rm, HttpStatus.BAD_REQUEST);
            
        } else if (am.getNomeAluno().equals("")) {

            rm.setMensagem("Insira um nome válido!");
            return new ResponseEntity<HttpResponse>(rm, HttpStatus.BAD_REQUEST);

        } else {
        
            if (acao.equals("cadastrar")){
                return new ResponseEntity<AlunoModel>(pr.save(am), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<AlunoModel>(pr.save(am), HttpStatus.OK);
            }
        
        }

    }

    // Método para remover alunos
    public ResponseEntity<HttpResponse> remover(long rmAluno){

        pr.deleteById(rmAluno);

        rm.setMensagem("O aluno foi removido com sucesso!");
        return new ResponseEntity<HttpResponse>(rm, HttpStatus.OK);

    }

}
