package pl.onlineShop.services;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.onlineShop.entities.User;
import pl.onlineShop.entities.UserRepository;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository; // Zakłada, że masz repozytorium użytkowników

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        // Implementacja pobierania użytkownika z repozytorium
        User user = userRepository.findByName(name);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + name);
        }

        return new org.springframework.security.core.userdetails.User(
                user.getName(),
                user.getPassword(),
                // Możesz dostosować role użytkownika w zależności od Twojego modelu danych
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
        );
    }
}