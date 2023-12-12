package pl.onlineShop.controllers;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomPasswordEncoder implements PasswordEncoder {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public CustomPasswordEncoder() {
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    @Override
    public String encode(CharSequence charSequence) {
        return bCryptPasswordEncoder.encode(charSequence);
    }

    @Override
    public boolean matches(CharSequence charSequence, String encodedPassword) {
        return bCryptPasswordEncoder.matches(charSequence, encodedPassword);
    }
}
