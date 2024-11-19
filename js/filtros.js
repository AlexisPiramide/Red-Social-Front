document.addEventListener("DOMContentLoaded", () => {
  setupContent();
});

function setupContent() {
  const filtrosDiv = document.getElementsByClassName("filter")[0]; // Access the first element with the "filter" class
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

  // Add "Usuario" label and input
  const labelUsuario = document.createElement("label");
  labelUsuario.textContent = "Usuario";
  form.append(labelUsuario);

  const inputUsuario = document.createElement("input");
  inputUsuario.type = "text";
  inputUsuario.id = "usuario";
  inputUsuario.name = "usuario";
  inputUsuario.placeholder = "...";
  form.append(inputUsuario);

  // Add "Fecha" label and date inputs
  const labelFecha = document.createElement("label");
  labelFecha.textContent = "Fecha";
  form.append(labelFecha);

  // Day input
  const inputDia = document.createElement("input");
  inputDia.type = "text";
  inputDia.id = "dia";
  inputDia.name = "dia";
  inputDia.placeholder = "Dia";
  form.append(inputDia);

  // Month input
  const inputMes = document.createElement("input");
  inputMes.type = "text";
  inputMes.id = "mes";
  inputMes.name = "mes";
  inputMes.placeholder = "Mes";
  form.append(inputMes);


  // Year input
  const inputAnno = document.createElement("input");
  inputAnno.type = "text";
  inputAnno.id = "anno";
  inputAnno.name = "anno";
  inputAnno.placeholder = "Año";
  form.append(inputAnno);

  // Submit button

  const submitButton = document.createElement("button");
  submitButton.textContent = "Enviar";
  form.append(submitButton);

  // Append the form to the filtrosDiv
  filtrosDiv.append(form); // Make sure filtrosDiv is properly selected and accessible
}
