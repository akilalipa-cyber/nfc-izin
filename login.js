<script>
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const role = document.getElementById("role").value;

  if (!role) {
    alert("Pilih jenis akses!");
    return;
  }

  // Simpan role ke session
  sessionStorage.setItem("role", role);

  // Redirect sesuai role
  if (role === "gerbang") window.location.href = "gerbang.html";
  if (role === "operator") window.location.href = "operator.html";
  if (role === "walikelas") window.location.href = "walikelas.html";
  if (role === "gurumapel") window.location.href = "gurumapel.html";
  if (role === "siswa") window.location.href = "siswa.html";
});
</script>
