document.addEventListener("DOMContentLoaded", () => {
  setupContent();
});

function setupContent() {
  const filtrosDiv = document.getElementsByClassName("filter")[0]; 
  const form = document.createElement("form");
  form.id = "formulario";
  form.action = "/filtrados";

  const labelTexto = document.createElement("label");
  labelTexto.textContent = "Filtrar Por Texto";
  form.append(labelTexto);

  const inputTexto = document.createElement("input");
  inputTexto.type = "text";
  inputTexto.id = "texto";
  inputTexto.name = "texto";
  inputTexto.placeholder = "..";
  form.append(inputTexto);

  const labelUsuario = document.createElement("label");
  labelUsuario.textContent = "Usuario";
  form.append(labelUsuario);

  const inputUsuario = document.createElement("input");
  inputUsuario.type = "text";
  inputUsuario.id = "usuario";
  inputUsuario.name = "usuario";
  inputUsuario.placeholder = "...";
  form.append(inputUsuario);

  const labelFecha = document.createElement("label");
  labelFecha.textContent = "Fecha";
  form.append(labelFecha);

  const inputDia = document.createElement("input");
  inputDia.type = "text";
  inputDia.id = "dia";
  inputDia.name = "dia";
  inputDia.placeholder = "Dia";
  form.append(inputDia);

  const inputMes = document.createElement("input");
  inputMes.type = "text";
  inputMes.id = "mes";
  inputMes.name = "mes";
  inputMes.placeholder = "Mes";
  form.append(inputMes);

  const inputAnno = document.createElement("input");
  inputAnno.type = "text";
  inputAnno.id = "anno";
  inputAnno.name = "anno";
  inputAnno.placeholder = "Año";
  form.append(inputAnno);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Enviar";
  form.append(submitButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = inputUsuario.value.trim();
    const dia = inputDia.value.trim();
    const mes = inputMes.value.trim();
    const anno = inputAnno.value.trim();

    let isValid = true;
    let errorMessage = "";


    if (usuario && usuario.length < 8) {
      isValid = false;
      errorMessage += "El campo 'Usuario' debe tener al menos 8 caracteres.\n";
    }
  
    const validDate = /^([0-9]{1,2})$/.test(dia) && /^([0-9]{1,2})$/.test(mes) && /^([0-9]{4})$/.test(anno);
    if (!validDate) {
      isValid = false;
      errorMessage += "La fecha debe tener el formato correcto (Día, Mes, Año).\n";
    }

    if (!isValid) {
      alert(errorMessage);
    } else {
      alert("Formulario válido, se enviaría al back.");
    
    }
  });

  filtrosDiv.append(form); 
}
