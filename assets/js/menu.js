
let saldo = Number(localStorage.getItem("saldo")) || 60.000;

document.getElementById("saldo").textContent = saldo;

document.getElementById('btndepositar').addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("mensaje").innerText = "Redirigiendo a Depositar";

    setTimeout(() => {
        window.location.href = "depositar.html";
    }, 2000);
});

document.getElementById('btnenviar').addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("mensaje").innerText = "Redirigiendo a Enviar";

    setTimeout(() => {
        window.location.href = "enviar.html";
    }, 2000);
});

document.getElementById('btnmovimientos').addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("mensaje").innerText = "Redirigiendo a Últimos movimientos";

    setTimeout(() => {
        window.location.href = "movimientos.html";
    }, 2000);
});