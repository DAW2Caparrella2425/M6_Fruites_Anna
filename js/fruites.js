let fruites = []; // Array per emmagatzemar les fruites
let idSeleccionat = null;

function renderTaula() {
    const taulaCos = document.querySelector("#taula tbody");
    taulaCos.innerHTML = ""; // Netejar la taula abans de renderitzar

    fruites.forEach((fruita, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${fruita.nom}</td>
            <td>
                <button onclick="seleccionar(${index})">Modificar</button>
                <button onclick="esborrar(${index})">Borrar</button>
            </td>
        `;
        taulaCos.appendChild(fila);
    });
}

function crear() {
    const nom = document.getElementById("nomFruita").value;
    
    if (nom === "") {
        alert("El camp del nom esta buit");
        return;
    }

    const novaFruita = {

        nom: nom,
    };
    fruites.push(novaFruita);
    renderTaula();
    document.getElementById("nomFruita").value = ""; // Netejar inputs
}

function seleccionar(index) {
    idSeleccionat = index;
    document.getElementById("nomFruita").value = fruites[index].nom;
}

function modificar() {
    const nom = document.getElementById("nomFruita").value;

    if (idSeleccionat !== null && nom !== "") {
        fruites[idSeleccionat].nom = nom;
        renderTaula();
        document.getElementById("nomFruita").value = "";
        idSeleccionat = null;
    } else {
        alert("Cap fruita seleccionada o camps buits");
    }
}

function esborrar(index) {
    fruites.splice(index, 1);
    renderTaula();
}
