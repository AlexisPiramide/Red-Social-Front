document.addEventListener("DOMContentLoaded", () => {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
        console.log("No user is logged in!");
        return;
    }

    let borradores = localStorage.getItem("borradores");
    if (borradores) {
        borradores = JSON.parse(borradores);
        borradores = borradores.filter(borrador => borrador.usuario == usuario.correo);
        renderBorradores(borradores); 
    } else {
        console.log("No borradores found in localStorage!");
    }
});

const renderBorradores = (borradores) => {
    const borradoresContainer = document.getElementsByClassName("borradores")[0];
    borradoresContainer.innerHTML = ""; 
    borradores.forEach(borrador => imprimeBorrador(borrador, borradoresContainer));
};

function imprimeBorrador(borrador, container) {
    const borradorDiv = document.createElement("div");
    borradorDiv.id = borrador.id;
    borradorDiv.classList.add("borrador");

    const userInfo = document.createElement("p");
    userInfo.classList.add("borrador-user");
    userInfo.textContent = `User: ${borrador.usuario}`;

    const borradorText = document.createElement("p");
    borradorText.classList.add("borrador-text");
    borradorText.textContent = borrador.texto;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.onclick = () => removeBorrador(borrador.id);

    const publishButton = document.createElement("button");
    publishButton.textContent = "Publish";
    publishButton.classList.add("publish-button");
    publishButton.onclick = () => publicar(borrador);

    borradorDiv.append(userInfo, borradorText, removeButton, publishButton);
    container.append(borradorDiv);
}

function publicar(borrador) {
    let borradores = JSON.parse(localStorage.getItem("borradores")) || [];

    borradores = borradores.filter(b => b.id !== borrador.id);
    localStorage.setItem("borradores", JSON.stringify(borradores));

    let tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    const randomId = Math.floor(Math.random() * 100000000) + 1;

    const fecha = new Date().toISOString();

    const tweet = {
        id: randomId, 
        n_likes: 0,
        texto: borrador.texto,
        fecha: fecha,
        usuario: borrador.usuario,
        publicado: true 
    };

    tweets.push(tweet);
    localStorage.setItem("tweets", JSON.stringify(tweets));

    const borradorDiv = document.getElementById(borrador.id);
    if (borradorDiv) {
        borradorDiv.remove();
    }

    console.log("Borrador published as a tweet!");
}

function removeBorrador(id) {
    let borradores = JSON.parse(localStorage.getItem("borradores")) || [];
    borradores = borradores.filter(borrador => borrador.id !== id);
    localStorage.setItem("borradores", JSON.stringify(borradores));
    const borradorDiv = document.getElementById(id);
    borradorDiv.remove();
}

/*
localStorage.setItem(
    "borradores",
    JSON.stringify([
        { id: 1, texto: "Testing borrador one.", usuario: "ana.gomez@example.com" },
        { id: 2, texto: "Another borrador tweet here.", usuario: "ana.gomez@example.com" }
    ])
);
*/
