/****function puesto(){
    let ocupacion = (document.getElementById("puesto").value);
    document.getElementById("puesto").innerHTML=200;
}
puesto();

function sumar() {
    let diasT= parseInt(document.getElementById("dias").value);
    let suldoD= parseFloat(document.getElementById("sueldo_diario").value);
    alert(diasT*suldoD)

}
function limpiar() {
    document.getElementById('calc').onreset();
}


let nombre= "manuel";
//document.getElementById("txt").innerHTML= nombre;


function resultado() {
    let diasT= parseInt(document.getElementById("dias").value);
    let suldoD= parseFloat(document.getElementById("sueldo_diario").value);
    document.getElementById("sueldoB").innerHTML= "El total a pagar es: " + `(${diasT}*${suldoD})`;
}
$checkbox = document.forms["miForm"]["empleado1"].checked;
**/
const $listaTrabajadores=document.getElementById("trabajadores"),
    $checkbox = document.getElementById('checkbox');



    let work1=["Ruiz Meza Luis Manuel","Reclutador",8000];

function tabla(){
    let $contendTable= `
    <section>
        <a href="#modal-activo" class="animate__animated animate__rubberBand">Ver Personal Activo</a>
        <a href="#modal-PENDIENTE" class="animate__animated animate__rubberBand">Ver Bajas del mes</a>

        <div id="modal-activo" class="modal animate__animated animate__flip">
            <aside class="modal-box-activo">
            <form action="#" name="miForm" onsubmit="return validarFormulario()">
                Seleccionar
                <input type="checkbox" id="checkbox" name="empleado1" value="1">
                <input type="checkbox" id="checkbox" name="empleado2" value="2">
                <input type="checkbox" id="checkbox" name="empleado3" value="3">
                <input type="checkbox" id="checkbox" name="empleado4" value="4">
                <input type="checkbox" id="checkbox" name="empleado5" value="5">
                <input type="submit" value="Enviar">
            </form>
                <table>
                    <tr>
                        <th colspan="4">Septiembre</th>
                    </tr>
                    <tr>
                    <td>Nombre</td>
                    <td>Puesto</td>
                    <td>Sueldo</td>
                    </tr>
                    <tr>
                        <td>${work1[0]}</td>
                        <td>${work1[1]}</td>
                        <td>${work1[2]}</td>
                    </tr>
                    <tr>
                        <td>Jorge Ramirez Peralta</td>
                        <td>Auditor</td>
                        <td>$9000</td>
                    </tr>
                    <tr>
                        <td>Veronica Smith Juarez</td>
                        <td>Subdirección</td>
                        <td>$17000</td>
                    </tr>
                    <tr>
                        <td>Francisco Javier Chavez</td>
                        <td>Gerente de Ventas</td>
                        <td>$11000</td>
                    </tr>
                    <tr>
                    <td>Juan David Santos Ruiz</td>
                    <td>Ejecutivo de Mayoreo</td>
                    <td>$6500</td>
                </tr>

                </table>
                <a href="#">cerrar</a>
                </aside>			
        </div>
        <div id="info"></div>
    </section>`;
$listaTrabajadores.insertAdjacentHTML("beforebegin",$contendTable);
};

$listaTrabajadores.addEventListener("click",tabla)

function holaMundo() {
    console.log("hola mundo");
}
$listaTrabajadores.addEventListener("click",holaMundo);

function validarFormulario() {
    const elemento1= document.forms["miForm"]["empleado1"].checked,
        elemento2= document.forms["miForm"]["empleado2"].checked,
        elemento3= document.forms["miForm"]["empleado3"].checked,
        elemento4= document.forms["miForm"]["empleado4"].checked,
        elemento5= document.forms["miForm"]["empleado5"].checked;

    if(elemento1== true && elemento2==true && elemento3==true && elemento4==true && elemento5==true) {
        document.getElementById("info").innerHTML= "el elemento fue seleccionado";
        document.getElementById("info").innerHTML= `Nombre: ${work1[0]}`;

        return false;
    }else
    document.getElementById("info").innerHTML= "el elemento no fue seleccionado";
    return false;
}

/**** 
 function on(){
     console.log("Hemos pulsado en on");
}

function off(){
    console.log("Hemos pulsado en off");
}
function comprueba(){
  if(checkbox.checked){
      on();
  }else{
     off();
  }
}
  
$checkbox.addEventListener("checked", comprueba,false);
  */
  
 
 const $nombre1= document.getElementById("emp1");
    
    console.log($nombre1);
    let trabajador1={
        nombre: $nombre1,
        apellido:"cacahuate"
    }
    console.log(trabajador1);

























































