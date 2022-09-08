package br.com.dh.integradoraVII.controllers;

import br.com.dh.integradoraVII.entities.Usuario;
import br.com.dh.integradoraVII.servers.UsuarioServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("usuarios") //RequestMapping recebe as requisições do Front-End
public class UsuarioController {

    @Autowired
    private UsuarioServer service;

    @GetMapping // http://localhost:8080/usuarios/?id=1&nome=vinicius&email=vini@gmail.com&senha=199717&nivelacesso=1
    public Usuario salvar(@RequestParam(value = "id")Integer idrec,
                          @RequestParam(value = "nome")String nomerec,
                          @RequestParam(value = "email")String emailrec,
                          @RequestParam(value = "senha")String senharec,
                          @RequestParam(value = "nivelacesso")Integer nivelacessorec ) {
        return service.salvar(new Usuario(idrec, nomerec, emailrec, senharec, nivelacessorec));
         /*{
           "id": 1,
           "nome": "vinicius",
           "email": "vini@gmail.com",
           "senha": "199717",
           "nivelacesso": 1
           }
           */
    }

    @GetMapping("/buscar") //http://localhost:8080/usuarios/buscar
    public List<Usuario> buscartodos(){
        return service.buscarTodos();
    }

    @GetMapping("/{id}") //http://localhost:8080/usuarios/1
    public String excluir(@PathVariable Integer id){
        return service.excluir(id);
        /*
        O registro foi removido!
         */
    }
}
