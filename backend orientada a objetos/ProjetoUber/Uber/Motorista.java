package Uber;

import java.util.ArrayList;
import java.util.Collections;

public class Motorista {

    private String nome;
    private ArrayList<Passageiro> listaPassageiro = new ArrayList<>();

    public Motorista(String nome) {
        this.nome = nome;
    }

    public void addPassageiro(Passageiro passageiro){
        listaPassageiro.add(passageiro);


    }

    public void mostrarPassageiro(){
        Collections.sort(listaPassageiro);

        for(int i = 0; i < listaPassageiro.size(); i++){
            if (listaPassageiro.get(i).isEmbarcado()){
                System.out.println("ID: "     + listaPassageiro.get(i).getid() +
                                   "\tNome: " + listaPassageiro.get(i).getnome()
                                  );
            }
        }
    }

    public int quantidadePortadorDeDeficiencia(){
        int repeticao = 0;

        for (int i = 0; i < listaPassageiro.size(); i++){
            if (listaPassageiro.get(i).isdeficiencia() ){
                repeticao++;
            }
        }
        System.out.println("Quantidade de passageiros com deficiencia: " + repeticao);
        return repeticao;
    }
}
