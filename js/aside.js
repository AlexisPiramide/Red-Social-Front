document.addEventListener("DOMContentLoaded", function() {
    mostrarBotones();
});

//localStorage.setItem("usuario", JSON.stringify({ nombre: "User Name", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpZaeWxczipxrTdSIThz5hmwrRYhEeeAl5A&s" }));

function mostrarBotones() {
    const botonesDiv = document.getElementById("botones");
    const usuarioDiv = document.getElementById("usuarioAside");

    botonesDiv.innerHTML = "";
    const usuario = localStorage.getItem("usuario");
    usuario ? usuarioLogeado(botonesDiv, usuarioDiv) : usuarioNoLogeado(botonesDiv, usuarioDiv);
}

function usuarioLogeado(botonesDiv, usuarioDiv) {
    const botonInicio = document.createElement("a");
    botonInicio.href = "index.html";
    botonInicio.innerHTML = '<button id="boton-inicio">Inicio</button>';
    botonesDiv.append(botonInicio);

    const botonTop = document.createElement("a");
    botonTop.href = "index.html";
    botonTop.innerHTML = '<button id="boton-top">TOP Tweets</button>';
    botonesDiv.append(botonTop);

    const botonNuevo = document.createElement("a");
    botonNuevo.href = "nuevoTweet.html";
    botonNuevo.innerHTML = '<button id="boton-nuevo">Nuevo Tweet</button>';
    botonesDiv.append(botonNuevo);

    const botonBorradores = document.createElement("a");
    botonBorradores.href = "/";
    botonBorradores.innerHTML = '<button id="boton-borradores">Mis Borradores</button>';
    botonesDiv.append(botonBorradores);

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
    const botonInicio = document.createElement("a");
    botonInicio.href = "index.html";
    botonInicio.innerHTML = '<button id="boton-inicio">Inicio</button>';
    botonesDiv.append(botonInicio);

    const botonTop = document.createElement("a");
    botonTop.href = "index.html";
    botonTop.innerHTML = '<button id="boton-top">TOP Tweets</button>';
    botonesDiv.append(botonTop);

    const botonRegistro = document.createElement("a");
    botonRegistro.href = "registro.html";
    botonRegistro.innerHTML = '<button id="boton-registro">Registro</button>';
    botonesDiv.append(botonRegistro);

    const botonLogin = document.createElement("a");
    botonLogin.href = "login.html";
    botonLogin.innerHTML = '<button id="boton-login">LogIn</button>';
    botonesDiv.append(botonLogin);

    usuarioDiv.innerHTML = "Bienvenido";
}
