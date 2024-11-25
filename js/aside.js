document.addEventListener("DOMContentLoaded", function() {
    mostrarBotones();
});
// Para pruebas rapidas, eliminar al acabar
// localStorage.setItem("usuario", JSON.stringify({ nombre: "User Name", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpZaeWxczipxrTdSIThz5hmwrRYhEeeAl5A&s" }));

function mostrarBotones() {
    const botonesDiv = document.getElementById("botones");
    const usuarioDiv = document.getElementById("usuarioAside");
    
    botonesDiv.innerHTML = "";
    const usuario = localStorage.getItem("usuario");

    if (usuario) {
        usuarioLogeado(botonesDiv, usuarioDiv);
    } else {
        usuarioNoLogeado(botonesDiv, usuarioDiv);
    }
}

function crearBoton(href, id, text) {
    const boton = document.createElement("a");
    boton.href = href;
    boton.innerHTML = `<button id="${id}">${text}</button>`;
    return boton;
}

function usuarioLogeado(botonesDiv, usuarioDiv) {
    botonesDiv.append(
        crearBoton("index.html", "boton-inicio", "Inicio"),
        crearBoton("index.html", "boton-top", "TOP Tweets"),
        crearBoton("nuevoTweet.html", "boton-nuevo", "Nuevo Tweet"),
        crearBoton("borradores.html", "boton-borradores", "Mis Borradores")
    );

    usuarioDiv.innerHTML = "";
    const usuarioData = JSON.parse(localStorage.getItem("usuario"));
    
    const imgPerfil = document.createElement("img");
    imgPerfil.src = usuarioData.imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpZaeWxczipxrTdSIThz5hmwrRYhEeeAl5A&s";
    imgPerfil.alt = "Imagen de perfil";
    
    const nombreUsuario = document.createElement("span");
    nombreUsuario.textContent = usuarioData.nombre;

    const botonCerrarSesion = document.createElement("button");
    botonCerrarSesion.textContent = "Cerrar Sesión";
    botonCerrarSesion.onclick = function() {
        localStorage.removeItem("usuario");
        mostrarBotones();
    };

    usuarioDiv.append(imgPerfil, nombreUsuario, botonCerrarSesion);
}

function usuarioNoLogeado(botonesDiv, usuarioDiv) {
    botonesDiv.append(
        crearBoton("index.html", "boton-inicio", "Inicio"),
        crearBoton("index.html", "boton-top", "TOP Tweets"),
        crearBoton("registro.html", "boton-registro", "Registro"),
        crearBoton("login.html", "boton-login", "LogIn")
    );

    usuarioDiv.innerHTML = "Bienvenido";
}

