let tareaNueva;
const inputTarea = document.querySelector("#inputTarea");
const aggTarea = document.querySelector('#aggTarea');
const tableTemplate = document.querySelector('#tableTemplate');
const totalContador = document.querySelector('#totalContador');
const btnBorrar = document.querySelector('#btnBorrar');
const realizadasContador = document.querySelector('#realizadasContador');
const elementoTable = document.querySelector('#elementoTable')


const tareas = [
    {id: 25, nombre: "Hacer compras"},
    {id: 48, nombre: "Limpiar pieza"},
    {id: 60, nombre: "Lavar ropa"}
];




  // --- Carga inicial
  document.addEventListener('DOMContentLoaded', (event) =>{
    
    aggTarea.addEventListener('click', agregar)
    cargaInicial();
  });


// -- generador de id
  function ramdonNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(99);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function cargaInicial() {
    renderTareas();
  }

// --- Template


// -- agregamos la tarea
  function agregar() {    
    if (inputTarea.value == ""){
      alert('Debe rellenar el campo')
      return
    } else {
        let tareaNueva = inputTarea.value;
        tareas.push({id: ramdonNum(), nombre: tareaNueva});
        inputTarea.value = "";
        renderTareas();
        console.log(renderTareas())
  }

   
  }

// -- hacemos un render para reutilizar codigo
  function renderTareas() {
    
    let checkValue = document.querySelector('#checkBox');
    let html = "";
    let contadorTareas = "";

    for (tarea of tareas){

      html += `
        <tr id="elementoTable">
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
        <td>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkBox" onChange="conteoTareas(this)">
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
    checkValue.setAttribute("onChange", "conteoTareas(this)");
  }


// -- funcion borrar
function borrar(id) {

  const index = tareas.findIndex((ele) => ele.id == id)
  tareas.splice(index, 1)
  renderTareas();
}

function conteoRealizadas(cont){
  console.log(cont);
  conteoRealizadas++;
  realizadasContador.innerHTML = conteoRealizadas;
}



function conteoTareas(cb){  
  let conteoTareas = "";
  
  if (cb.checked == true){
    tareas.nombre.style.textDecoration = "line-through";
    conteoTareas ++;
  } else {
    conteoTareas --;
  }
  console.log(conteoTareas)
  realizadasContador.innerHTML = `<p class="fw-semibold">Realizadas: ${conteoTareas}</p>`
}
