const usuarioValido = "magdalenaretamales@gmail.com"
const contrasenaValida = "1234"

const validarUsuario = document.getElementById("loginForm");

validarUsuario.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;



  if (email === usuarioValido && contrasena === contrasenaValida) {
    console.log(`Bienvenido ${email}`);
    alert("Ingreso exitoso");
    window.location.href = "menu.html"; 
  } else {
    alert("Error: Email o contraseña incorrectos");
  }
});