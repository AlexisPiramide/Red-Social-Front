
const tweetTextArea = document.getElementById("text-field");
const charCount = document.getElementById("char-count");

let tweets = JSON.parse(localStorage.getItem("tweets")) || [];
let borradores = JSON.parse(localStorage.getItem("borradores")) || [];

function enviarTweet() {
  const tweetContent = tweetTextArea.value.trim();
  const usuario =  localStorage.getItem("usuario")

  // Check if the user is logged in
  if (!user) {
    alert("No estás logueado.");
    return;
  }

  if (tweetContent && tweetContent.length <= 400) {
    const randomId = Math.floor(Math.random() * 100000000) + 1;
    const tweet = {
      id: randomId,
      n_likes: 0,
      texto: tweetContent,
      fecha: new Date().toISOString(),
      usuario: user,
      publicado: true,
    };

    // Add tweet to the array and store in localStorage
    tweets.push(tweet);
    localStorage.setItem("tweets", JSON.stringify(tweets));

    alert("Tweet enviado!");
    tweetTextArea.value = "";
    charCount.textContent = "400 caracteres restantes";
  } else {
    alert("Por favor, escribe un tweet válido.");
  }
}

function guardarBorrador() {
  const draftContent = tweetTextArea.value.trim();
  const usuario =  localStorage.getItem("usuario")

  // Check if the user is logged in
  if (!user) {
    alert("No estás logueado.");
    return;
  }

  if (draftContent && draftContent.length <= 400) {
    const borrador = {
      id: borradores.length + 1,
      texto: draftContent,
      usuario: user,
    };

    // Add draft to the array and store in localStorage
    borradores.push(borrador);
    localStorage.setItem("borradores", JSON.stringify(borradores));

    alert("Borrador guardado!");
    tweetTextArea.value = "";
    charCount.textContent = "400 caracteres restantes";
  } else {
    alert("Por favor, escribe un borrador válido.");
  }
}

// Event listeners for the buttons
document.getElementById("enviar").addEventListener("click", enviarTweet);
document.getElementById("borrador").addEventListener("click", guardarBorrador);

// Update character count dynamically as the user types
tweetTextArea.addEventListener("input", function() {
  const remainingChars = 400 - tweetTextArea.value.length;
  charCount.textContent = `${remainingChars} caracteres restantes`;
});
