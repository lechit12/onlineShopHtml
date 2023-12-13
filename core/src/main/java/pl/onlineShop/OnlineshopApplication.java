package pl.onlineShop;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "pl.onlineShop.entities")
public class OnlineshopApplication {
    public static void main(String[] args) {
        SpringApplication.run(OnlineshopApplication.class, args);
    }
}
