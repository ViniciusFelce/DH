package Uber;

public class Main {
    public static void main(String[] args) {

        Passageiro passageiro1 =  new Passageiro
                (1, "joao", "Rua Javailson", false, true);

        Passageiro passageiro2 =  new Passageiro
                (2, "Ana", "Rua Nidio For Speed", true, false);

        Passageiro passageiro3 =  new Passageiro
                (3, "Maria", "Rua Jason dos Scripts", true, true);

        Motorista motorista = new Motorista("Relampago Marquinhos");

        motorista.addPassageiro(passageiro1);
        motorista.addPassageiro(passageiro2);
        motorista.addPassageiro(passageiro3);

        motorista.mostrarPassageiro();

        motorista.quantidadePortadorDeDeficiencia();
    }
}
