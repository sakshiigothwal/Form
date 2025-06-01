const form = document.getElementById("registrationForm");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^.{8,}$/; 

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!emailPattern.test(email) || !passwordPattern.test(password)) {
    return; 
  }

  const user = {
    name,
    email,
    password
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const alreadyExists = users.some(u => u.email === email);
  if (alreadyExists) return;

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  form.reset();
});
