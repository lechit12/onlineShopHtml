package pl.onlineShop.entities;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    User findByName(String name);
    List<User> findAll();
}
