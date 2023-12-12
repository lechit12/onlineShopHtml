
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
  // Znajdź indeks rejestracji na podstawie identyfikatora
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


  