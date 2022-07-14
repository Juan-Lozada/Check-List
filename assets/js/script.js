let tareaNueva;
const inputTarea = document.querySelector("#inputTarea");
const aggTarea = document.querySelector('#aggTarea');
const tableTemplate = document.querySelector('#tableTemplate');
const totalContador = document.querySelector('#totalContador');
const btnBorrar = document.querySelector('#btnBorrar')

const tareas = [
    {id: 25, nombre: "Hacer compras"},
    {id: 48, nombre: "Limpiar pieza"},
    {id: 60, nombre: "Lavar ropa"}
];




  // --- Carga inicial
  document.addEventListener('DOMContentLoaded', (event) =>{
    


    aggTarea.addEventListener('click', agregar)
    cargaInicial(tableTemplate);


  });


// -- generador de id
  function ramdonNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(99);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function cargaInicial(tableTemplate) {

    let tabla = "";
    for (const tarea of tareas) {
      tabla += renderTareas(tarea);
    }
    console.log(tabla)
    tableTemplate.innerHTML = tabla;
  }

// --- Template


// -- agregamos la tarea
  function agregar(tarea) {
     
    if (inputTarea == "" ||  inputTarea == null || inputTarea == undefined){
      alert('Debe rellenar el campo')
      return
    } else {
        let tareaNueva = inputTarea.value;
        tareas.push({id: ramdonNum(), nombre: tareaNueva});
        inputTarea.value = "";
        renderTareas();
  }

   
  }

// -- hacemos un render para reutilizar codigo
  function renderTareas() {
    
    let html = "";
    let contadorTareas = "";

    for (tarea of tareas){

      html += `
        <tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <button class="btn btn-danger btn-sm" type="button" onClick=borrar(${tarea.id})>x</button>
            <label class="custom-control-label" for="customCheck1"></label>
          </div>
        </td>
      </tr>
        `
    }

    contadorTareas += `<p class="fw-semibold">Total: ${tareas.length}<p class="fw-bold" id="totalContador"></p></p>`

    tableTemplate.innerHTML = html;
    totalContador.innerHTML = contadorTareas;

    console.log(renderTareas())
  }


// -- funcion borrar
function borrar(id) {

  const index = tareas.findIndex((ele) => ele.id == id)
  tareas.splice(index, 1)
  renderTareas();
}


// -- funcion checkBox
  function Check(checkValue) {
    
    let checkBox = document.querySelector("#checkBox");
    let text = document.getElementById("text");

    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
