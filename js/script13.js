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
**/

const $listaTrabajadores=document.getElementById("trabajadores"),
    $checkbox = document.getElementById('checkbox');


function tabla(){
    let $contendTable= `
    <section>
        <a href="#modal-activo" class="animate__animated animate__rubberBand">Ver Personal Activo</a>
        <a href="#modal-PENDIENTE" class="animate__animated animate__rubberBand">Ver Bajas del mes</a>

        <div id="modal-activo" class="modal animate__animated animate__flip">
            <aside class="modal-box-activo">
                <table>
                    <tr>
                        <th colspan="4">Septiembre</th>
                    </tr>
                    <tr>
                        <td>Seleccionar</td>
                        <td>Nombre</td>
                        <td>Puesto</td>
                        <td>Sueldo</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="checkbox" name="empleado" value="1"></td>
                        <td>Luis Manuel Ruiz Meza</td>
                        <td>Promotor de ventas</td>
                        <td>$5000</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="checkbox" name="empleado" value="2"></td>
                        <td>Jorge Ramirez Peralta</td>
                        <td>Auditor</td>
                        <td>$9000</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="checkbox" name="empleado" value="3"></td>
                        <td>Veronica Smith Juarez</td>
                        <td>Subdirección</td>
                        <td>$17000</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="checkbox" name="empleado" value="4"></td>
                        <td>Francisco Javier Chavez</td>
                        <td>Gerente de Ventas</td>
                        <td>$11000</td>
                    </tr>
                    <tr>
                    <td><input type="checkbox" id="checkbox" name="empleado" value="5"></td>
                    <td>Juan David Santos Ruiz</td>
                    <td>Ejecutivo de Mayoreo</td>
                    <td>$6500</td>
                </tr>

                </table>
                <a href="#">cerrar</a>
            </aside>			
        </div>
    </section>`;
$listaTrabajadores.insertAdjacentHTML("beforebegin",$contendTable);
};
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
  
  
  
//$checkbox.addEventListener("checked", comprueba,false);
  








$listaTrabajadores.addEventListener("click",tabla)

























