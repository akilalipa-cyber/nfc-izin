if (localStorage.getItem("loginRole") !== "operator") {
  alert("Akses ditolak");
  window.location.href = "index.html";
}
