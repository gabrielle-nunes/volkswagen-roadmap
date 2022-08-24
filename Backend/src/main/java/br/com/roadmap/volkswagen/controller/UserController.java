package br.com.roadmap.volkswagen.controller;

import br.com.roadmap.volkswagen.dto.UserDTO;
import br.com.roadmap.volkswagen.entities.User;
import br.com.roadmap.volkswagen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/config")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/user")
    public UserDTO cadastroUser(@RequestBody UserDTO userDTO) throws Exception{
        User user = User.convert(userDTO);

        return UserDTO.convert(userService.cadastroUser(user));
    }
}
