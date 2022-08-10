package com.chamada.chs.chamada.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table (name = "alunos")
@Data
public class AlunoModel {

    @Id
    private Long rmAluno;

    private String nomeAluno;
    private char turno;


    
}
