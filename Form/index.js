const form = document.getElementById("registrationForm");
const errMsg = document.getElementById("error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^.{8,}$/; 

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  errMsg.innerText="";

  if (!emailPattern.test(email)) {
    errMsg.innerText = "Please enter a valid email address.";
    return;
  }

  if (!passwordPattern.test(password)) {
    errMsg.innerText = "Password must be at least 8 characters long.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const alreadyExists = users.some(u => u.email === email);
  if (alreadyExists){
    errMsg.innerText = "An account with this email already exists.";
    return;
  }
  const user = {
    name,
    email,
    password
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  form.reset();
  errMsg.innerText = "Registration successful!";
});
