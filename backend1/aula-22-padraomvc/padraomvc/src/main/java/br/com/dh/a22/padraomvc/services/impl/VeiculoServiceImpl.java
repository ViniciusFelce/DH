package br.com.dh.a22.padraomvc.services.impl;

import br.com.dh.a22.padraomvc.entities.Veiculo;
import br.com.dh.a22.padraomvc.services.VeiculoService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class VeiculoServiceImpl implements VeiculoService {

    @Override
    public List<Veiculo> listVeiculo() {
        return Arrays.asList(
                new Veiculo("Volvo","XC40","Preto"),
                new Veiculo("Fiat","Palio","Branco"),
                new Veiculo("Volkswagen","Gol","Prata")
        );
    }
}
