let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

let contactoSeleccionado = null;

function mostrarContactos() {

    const lista = document.getElementById("contactList");
    lista.innerHTML = "";

    contactos.forEach(c => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        li.innerHTML = `
            <strong>${c.nombre}</strong><br>
            CBU: ${c.cbu}<br>
            Alias: ${c.alias}<br>
            Banco: ${c.banco}
        `;

        li.addEventListener("click", function () {

            contactoSeleccionado = c;

            document.querySelectorAll(".list-group-item").forEach(i => {
                i.style.background = "white";
            });

            li.style.background = "#d1e7dd";
        });

        lista.appendChild(li);
    });
}

document.getElementById("btnguardarContacto").addEventListener("click", function () {

    contactos.push({
        nombre: document.getElementById("nombre").value,
        cbu: document.getElementById("cbu").value,
        alias: document.getElementById("alias").value,
        banco: document.getElementById("banco").value
    });

    localStorage.setItem("contactos", JSON.stringify(contactos));

    mostrarContactos();

    $('#contactoModal').modal('hide');
});

document.getElementById("btnenviar").addEventListener("click", function () {

    const monto = Number(document.getElementById("montoenviar").value);

    let saldo = Number(localStorage.getItem("saldo")) || 60000;

    if (!contactoSeleccionado) {
        alert("Selecciona un contacto");
        return;
    }

    if (monto <= 0) {
        alert("Monto inválido");
        return;
    }

    if (monto > saldo) {
        alert("Saldo insuficiente");
        return;
    }

    saldo -= monto;

    localStorage.setItem("saldo", saldo);

    movimientos.push({
        tipo: "Envío",
        monto: monto,
        destinatario: contactoSeleccionado.nombre,
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    alert("Transferencia realizada");

    window.location.href = "menu.html";
});

mostrarContactos();