document.addEventListener("DOMContentLoaded", () => {
  const registro = document.getElementById("registro");
  const login = document.getElementById("login");

  if (registro) {
    registro.addEventListener('submit', (e) => validarFormulario(e, true));

    document.getElementById('nombre').addEventListener('input', () => validarCampo('nombre', true));
    document.getElementById('correo').addEventListener('input', () => validarCampo('correo', true));
    document.getElementById('password').addEventListener('input', () => validarCampo('password', true));
    document.getElementById('repetir_password').addEventListener('input', () => validarCampo('repetir_password', true));
} else if (login) {
    login.addEventListener('submit', (e) => validarFormulario(e, false));

    document.getElementById('nombre').addEventListener('input', () => validarCampo('nombre', false));
    document.getElementById('correo').addEventListener('input', () => validarCampo('correo', false));
    document.getElementById('password').addEventListener('input', () => validarCampo('password', false));
}
});

function validarFormulario(e, isRegistro) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const errorNombre = document.getElementById("errornombre");
  const correo = document.getElementById("correo").value.trim();
  const errorCorreo = document.getElementById("errorcorreo");
  const password = document.getElementById("password").value.trim();
  const errorPassword = document.getElementById("errorpassword");
  const repeatPassword = isRegistro
    ? document.getElementById("repetir_password").value.trim()
    : null;
  const errorRepeatPassword = isRegistro
    ? document.getElementById("errorrepetir")
    : null;

  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorPassword.textContent = "";
  if (isRegistro) errorRepeatPassword.textContent = "";

  let valid = true;

  if (nombre.length < 8) {
    errorNombre.textContent += "El nombre debe tener al menos 8 caracteres. ";
    valid = false;
  }
  if (nombre === nombre.toLowerCase()) {
    errorNombre.textContent +=
      "El nombre debe contener al menos una mayúscula. ";
    valid = false;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(correo)) {
    errorCorreo.textContent =
      "Por favor utiliza un formato de email válido (ejemplo@ejemplo.com).";
    valid = false;
  }

  if (password.length < 8) {
    errorPassword.textContent += "Debe tener al menos 8 caracteres. ";
    valid = false;
  }
  if (password === password.toLowerCase()) {
    errorPassword.textContent += "Debe contener al menos una mayúscula. ";
    valid = false;
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errorPassword.textContent +=
      "Debe contener al menos un carácter especial como : !@#$%^&*(),.";
    valid = false;
  }

  if (isRegistro && repeatPassword !== password) {
    errorRepeatPassword.textContent = "Las contraseñas no coinciden.";
    valid = false;
  }

  if (valid) {
    const formData = {
      nombre: nombre,
      correo: correo,
    };

    localStorage.setItem(
      isRegistro ? "usuario" : "usuario",
      JSON.stringify(formData)
    );

    redirectToPage("index.html")
  }
}


function validarCampo(campo, isRegistro) {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const repeatPassword = isRegistro ? document.getElementById('repetir_password').value.trim() : null;

    const errorNombre = document.getElementById('errornombre');
    const errorCorreo = document.getElementById('errorcorreo');
    const errorPassword = document.getElementById('errorpassword');
    const errorRepeatPassword = isRegistro ? document.getElementById('errorrepetir') : null;

    errorNombre.textContent = '';
    errorCorreo.textContent = '';
    errorPassword.textContent = '';
    if (isRegistro) errorRepeatPassword.textContent = '';

    switch (campo) {
        case 'nombre':
            if (nombre.length < 8) {
                errorNombre.textContent += 'El nombre debe tener al menos 8 caracteres. ';
            }
            if (nombre === nombre.toLowerCase()) {
                errorNombre.textContent += 'El nombre debe contener al menos una mayúscula. ';
            }
            break;
        case 'correo':
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!emailRegex.test(correo)) {
                errorCorreo.textContent = 'Por favor utiliza un formato de email válido (ejemplo@ejemplo.com).';
            }
            break;
        case 'password':
            if (password.length < 8) {
                errorPassword.textContent += 'Debe tener al menos 8 caracteres. ';
            }
            if (password === password.toLowerCase()) {
                errorPassword.textContent += 'Debe contener al menos una mayúscula. ';
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                errorPassword.textContent += 'Debe contener al menos un carácter especial como : !@#$%^&*(),.';
            }
            break;
        case 'repetir_password':
            if (isRegistro && repeatPassword !== password) {
                errorRepeatPassword.textContent = 'Las contraseñas no coinciden.';
            }
            break;
    }
}


function redirectToPage(url) {
  window.location.href = url;
}