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
  submitButton.textContent = "Enviar";
  form.append(submitButton);

  
  filtrosDiv.append(form); 
}
