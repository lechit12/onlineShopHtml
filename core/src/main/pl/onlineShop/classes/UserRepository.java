package main.pl.onlineShop.classes;

public interface UserRepository extends JpaRepository<main.pl.onlineShop.classes.User, Long> {
    User findByEmail(String email);
}
