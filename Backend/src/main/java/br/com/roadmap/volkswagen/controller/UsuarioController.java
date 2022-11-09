package br.com.roadmap.volkswagen.controller;

import br.com.roadmap.volkswagen.dto.UsuarioDTO;
import br.com.roadmap.volkswagen.entities.Usuario;
import br.com.roadmap.volkswagen.repository.UsuarioRepository;
import br.com.roadmap.volkswagen.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/config")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/usuario")
    public UsuarioDTO cadastroUsuario(@RequestBody UsuarioDTO usuarioDTO) throws Exception{
        Usuario usuario = Usuario.convert(usuarioDTO);

        return UsuarioDTO.convert(usuarioService.cadastroUsuario(usuario));
    }
}
