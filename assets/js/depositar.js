let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

document.getElementById("btnDepositar").addEventListener("click", function () {

    const monto = Number(document.getElementById("depositAmount").value);

    let saldo = Number(localStorage.getItem("saldo")) || 60000;

    if (monto <= 0 || isNaN(monto)) {
        alert("Ingresa un monto válido");
        return;
    }
    saldo += monto;

    localStorage.setItem("saldo", saldo);

    movimientos.push({
        tipo: "Depósito",
        monto: monto,
        destinatario: "Cuenta propia",
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    alert("Depósito realizado");

    window.location.href = "menu.html";
});