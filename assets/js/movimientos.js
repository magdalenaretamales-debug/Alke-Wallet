let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

const lista = document.getElementById("listaMovimientos");

if (movimientos.length === 0) {
    lista.innerHTML = "<li class='list-group-item'>No hay movimientos</li>";
} else {

    movimientos.forEach(m => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        li.innerHTML = `
            <strong>${m.tipo}</strong><br>
            Monto: $${m.monto}<br>
            Destinatario: ${m.destinatario}<br>
            Fecha: ${m.fecha}
        `;

        lista.appendChild(li);
    });
}