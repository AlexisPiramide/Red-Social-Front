document.addEventListener("DOMContentLoaded", () => {
  const tweetTextArea = document.getElementById("text-field");
  const charCount = document.getElementById("char-count");

  document.getElementById("enviar").addEventListener("click", () => enviarTweet(tweetTextArea));
  document.getElementById("borrador").addEventListener("click", () => guardarBorrador(tweetTextArea));
});

let tweets = JSON.parse(localStorage.getItem("tweets")) || [];
let borradores = JSON.parse(localStorage.getItem("borradores")) || [];
function enviarTweet(tweetTextArea) {
  const texto = tweetTextArea.value.trim();
  const usuarioString = localStorage.getItem("usuario");

  if (!usuarioString) {
    alert("No estás logueado.");
    return;
  }

  const usuario = JSON.parse(usuarioString);

  if (texto && texto.length <= 400) {
    const randomId = Math.floor(Math.random() * 100000000) + 1;
    const tweet = {
      id: randomId,
      n_likes: 0,
      texto: texto,
      fecha: new Date().toISOString(),
      usuario: usuario.correo,
      publicado: true,
    };

    tweets.push(tweet);
    localStorage.setItem("tweets", JSON.stringify(tweets));

    alert("Tweet enviado!");
    redirectToPage("index.html")
  } else {
    alert("Por favor, escribe un tweet válido (1-400 caracteres).");
  }
}

function guardarBorrador(tweetTextArea) {
  const texto = tweetTextArea.value.trim();
  const usuarioString = localStorage.getItem("usuario");

  if (!usuarioString) {
    alert("No estás logueado.");
    return;
  }

  const usuario = JSON.parse(usuarioString);

  if (texto && texto.length <= 400) {
    const borrador = {
      id: borradores.length + 1,
      texto: texto,
      usuario: usuario.correo,
    };

    borradores.push(borrador);
    localStorage.setItem("borradores", JSON.stringify(borradores));

    alert("Borrador guardado!");
    redirectToPage("index.html")
  } else {
    alert("Por favor, escribe un borrador válido (1-400 caracteres).");
  }
}

function redirectToPage(url) {
  window.location.href = url;
}