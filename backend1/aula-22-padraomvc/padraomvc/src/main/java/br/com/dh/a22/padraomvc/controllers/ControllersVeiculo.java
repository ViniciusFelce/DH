package br.com.dh.a22.padraomvc.controllers;

import br.com.dh.a22.padraomvc.entities.Veiculo;
import br.com.dh.a22.padraomvc.services.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Veiculo")
public class ControllersVeiculo {

    @Autowired
    private VeiculoService service;

    //Alt+Insert: Const
    public ControllersVeiculo(VeiculoService service) {
        this.service = service;
    }
    @GetMapping
    public List<Veiculo> BuscarTodosVeiculos(){
        return service.listVeiculo();
    }
}
/*
TEST
http://localhost:8080/Veiculo
[
  {
    "marca": "Volvo",
    "nome": "XC40",
    "cor": "Preto"
  },
  {
    "marca": "Fiat",
    "nome": "Palio",
    "cor": "Branco"
  },
  {
    "marca": "Volkswagen",
    "nome": "Gol",
    "cor": "Prata"
  }
]
 */