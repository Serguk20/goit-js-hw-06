
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (email === "" || password === "") {
    alert("All fields must be filled in.");
  } else {
    const formData = {
      email: email,
      password: password
    };
    
    console.log(formData);
    loginForm.reset();
  }
});