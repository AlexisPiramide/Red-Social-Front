document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login');

    form.addEventListener('submit', (e) => {
        validacion(e);
    });
});

function validacion(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('errornombre');
    const correo = document.getElementById('correo').value.trim();
    const errorCorreo = document.getElementById('errorcorreo');
    const password = document.getElementById('password').value.trim();
    const errorPassword = document.getElementById('errorpassword');


    errorNombre.textContent = '';
    errorCorreo.textContent = '';
    errorPassword.textContent = '';

    let valid = true;

    if (nombre.length < 8) {
        errorNombre.textContent += 'El nombre debe tener al menos 8 caracteres. ';
        valid = false;
    }
    if (nombre === nombre.toLowerCase()) {
        errorNombre.textContent += 'El nombre debe contener al menos una mayúscula. ';
        valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(correo)) {
        errorCorreo.textContent = 'Por favor utiliza un formato de email válido (ejemplo@ejemplo.com).';
        valid = false;
    }

    if (password.length < 8) {
        errorPassword.textContent += 'Debe tener al menos 8 caracteres. ';
        valid = false;
    }
    if (password === password.toLowerCase()) {
        errorPassword.textContent += 'Debe contener al menos una mayúscula. ';
        valid = false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errorPassword.textContent += 'Debe contener al menos un carácter especial como : !@#$%^&*(),.';
        valid = false;
    }

    if (valid) {
        alert('Formulario enviado con éxito.');
    }
}