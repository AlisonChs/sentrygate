package com.chamada.chs.chamada.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chamada.chs.chamada.model.AlunoModel;

@Repository
public interface AlunoRepository extends CrudRepository<AlunoModel, Long>{
    
}
