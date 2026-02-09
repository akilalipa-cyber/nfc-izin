function login() {
  const role = document.getElementById("role").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const found = users.find(u =>
    u.username === user &&
    u.password === pass &&
    u.role === role
  );

  if (!found) {
    alert("Login gagal");
    return;
  }

  localStorage.setItem("loginRole", role);
  localStorage.setItem("loginUser", user);

  window.location.href = role + ".html";
}
