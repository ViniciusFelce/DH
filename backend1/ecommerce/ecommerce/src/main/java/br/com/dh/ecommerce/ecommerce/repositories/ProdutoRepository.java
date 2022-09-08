package br.com.dh.ecommerce.ecommerce.repositories;

import br.com.dh.ecommerce.ecommerce.entities.Produto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}
