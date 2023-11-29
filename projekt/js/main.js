
    function validateForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirm-password").value;
      
      var errorContainer = document.getElementById("error-container");
      var errorList = document.getElementById("error-list");
      errorList.innerHTML = "";
      
      var isValid = true;
      
      if (name === "") {
        isValid = false;
        var error = document.createElement("li");
        error.textContent = "Please enter your name.";
        errorList.appendChild(error);
      }
      
      if (email === "") {
        isValid = false;
        var error = document.createElement("li");
        error.textContent = "Please enter your email.";
        errorList.appendChild(error);
      }
      
      if (password === "") {
        isValid = false;
        var error = document.createElement("li");
        error.textContent = "Please enter a password.";
        errorList.appendChild(error);
      }
      
      if (confirmPassword === "") {
        isValid = false;
        var error = document.createElement("li");
        error.textContent = "Please confirm your password.";
        errorList.appendChild(error);
      }
      
      if (password !== confirmPassword) {
        isValid = false;
        var error = document.createElement("li");
        error.textContent = "Passwords do not match.";
        errorList.appendChild(error);
      }
      
      if (!isValid) {
        errorContainer.style.display = "block";
      }
      
      return isValid;
    }
    
    function register() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var gender = document.querySelector('input[name="gender"]:checked').value;
      
     var userData = {
        name: name,
        email: email,
        gender: gender
      };
      
     var storedData = localStorage.getItem("registrationData");
  var registrations = [];

  if (storedData) {
    registrations = JSON.parse(storedData);
  }

  registrations.push(userData);

  localStorage.setItem("registrationData", JSON.stringify(registrations));
  alert("Registration successful! Data saved.");
}

  
function updateData() {
  
    
    var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;

  var userData = {
    name: name,
    email: email,
    gender: gender
  };
var storedData = localStorage.getItem("registrationData");
  var registrations = [];
  
  if (storedData) {
    registrations = JSON.parse(storedData);
  // ZnajdÅº indeks rejestracji na podstawie identyfikatora
    var registrationId = userData.id;
    var index = registrations.findIndex(function(registration) {
      return registration.id === registrationId;
    });

    if (index !== -1) {
      registrations[index] = userData;
      localStorage.setItem("registrationData", JSON.stringify(registrations));
      alert("Data updated successfully!");
    } else {
      alert("Registration not found.");
    }
}
}

function deleteData() {
      var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      var storedData = localStorage.getItem("registrationData");
      if (storedData) {
        var registrations = JSON.parse(storedData);
        var updatedRegistrations = registrations.filter(function(registration) {
          return !Array.from(checkboxes).some(function(checkbox) {
            return checkbox.value === registration.email;
          });
        });

        localStorage.setItem("registrationData", JSON.stringify(updatedRegistrations));
        alert("Selected data deleted successfully!");
        displayData();
      } else {
        alert("No data available to delete.");
      }
    }


   // Tablica przechowuj¹ca produkty w koszyku
var cartItems = [];

// Funkcja dodaj¹ca produkt do koszyka
function addToCart(name, price, quantity) {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  var existingItem = cartItems.find(function(item) {
    return item.name === name;
  });

  if (existingItem) {
    // Jeœli produkt ju¿ istnieje w koszyku, zwiêksz iloœæ
    existingItem.quantity += quantity;
  } else {
    // W przeciwnym razie dodaj nowy produkt do koszyka
    var newItem = {
      name: name,
      price: price,
      quantity: quantity
    };
    cartItems.push(newItem);
  }

  // Zapisz koszyk w localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  alert("Item added to shopping cart!");
  
}

// Funkcja usuwaj¹ca produkt z koszyka


// Funkcja odœwie¿aj¹ca zawartoœæ koszyka
function updateCartTable() {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var tableBody = document.querySelector("#cart-table tbody");

  // Wyczyœæ zawartoœæ tabeli
  tableBody.innerHTML = "";

  // Generuj wiersze dla ka¿dego elementu w koszyku
  cartItems.forEach(function(item) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var priceCell = document.createElement("td");
    var quantityCell = document.createElement("td");
    var totalCell = document.createElement("td");
    var actionsCell = document.createElement("td");

    nameCell.textContent = item.name;
    priceCell.textContent = item.price.toFixed(2) + " $";
    quantityCell.textContent = item.quantity;
    totalCell.textContent = (item.price * item.quantity).toFixed(2) + " $";

    // Dodaj przycisk do usuwania produktu
    var removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.classList.add("btn", "btn-danger", "btn-sm");
    removeButton.addEventListener("click", function() {
      removeFromCart(item);
    });

    actionsCell.appendChild(removeButton);

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });

  // Aktualizuj sumê zamówienia
  updateTotalPrice();
}
  
function updateTotalPrice() {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var totalPrice = cartItems.reduce(function(acc, item) {
    return acc + item.price * item.quantity;
  }, 0);

  var totalPriceElement = document.querySelector("#total-price");
  totalPriceElement.textContent = "Total price: " + totalPrice.toFixed(2) + " $";
}

// Wywo³aj funkcjê po za³adowaniu strony, aby zaktualizowaæ zawartoœæ koszyka
window.addEventListener("DOMContentLoaded", function() {
  updateCartTable();
  });

// Funkcja do z³o¿enia zamówienia
function placeOrder() {
  fetch('endpoint-do-zlozenia-zamowienia', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItems),
  })
  .then(response => response.json())
  .then(data => {
    // Logika po z³o¿eniu zamówienia
  })
  .catch(error => {
    console.error('B³¹d podczas z³o¿enia zamówienia:', error);
  });
}
function removeFromCart(item) {
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // ZnajdŸ indeks produktu do usuniêcia
  var index = cartItems.findIndex(function(cartItem) {
    return cartItem.name === item.name;
  });

  if (index !== -1) {
    // Usuñ produkt z koszyka
    cartItems.splice(index, 1);

    // Zapisz zmieniony koszyk w localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Zaktualizuj tabelê koszyka
    updateCartTable();

    alert("Item removed from cart!");
  }
}
