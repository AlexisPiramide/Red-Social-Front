document.addEventListener('DOMContentLoaded', () => {
    const registro = document.getElementById('registro');
    const login = document.getElementById('login');

    if (registro) {
        registro.addEventListener('submit', (e) => validateForm(e, true));
    } else if (login) {
        login.addEventListener('submit', (e) => validateForm(e, false));
    }
});


function validateForm(e, isRegistro) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('errornombre');
    const correo = document.getElementById('correo').value.trim();
    const errorCorreo = document.getElementById('errorcorreo');
    const password = document.getElementById('password').value.trim();
    const errorPassword = document.getElementById('errorpassword');
    const repeatPassword = isRegistro ? document.getElementById('repetir_password').value.trim() : null;
    const errorRepeatPassword = isRegistro ? document.getElementById('errorrepetir') : null;

    errorNombre.textContent = '';
    errorCorreo.textContent = '';
    errorPassword.textContent = '';
    if (isRegistro) errorRepeatPassword.textContent = '';

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

    if (isRegistro && repeatPassword !== password) {
        errorRepeatPassword.textContent = 'Las contraseñas no coinciden.';
        valid = false;
    }


    if (valid) {
        const formData = {
            nombre: nombre,
            correo: correo,

        };

        localStorage.setItem(isRegistro ? 'usuario' : 'usuario', JSON.stringify(formData));

        alert('Formulario enviado con éxito.');
    }
}
