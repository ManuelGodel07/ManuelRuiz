/**
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



    let work1=["Ruiz Meza Luis Manuel","Reclutador",8000],
        sal1=266.66,
        work2=["Jorge Ramirez Peralta","Auditor",9000],
        sal2=300,
        work3=["Veronica Smith Juarez","Subdirección",17000],
        sal3=566.66,
        work4=["Francisco Javier Chavez","Gerente de Ventas",11000],
        sal4=366.66,
        work5=["Juan David Santos Ruiz","Ejecutivo de Mayoreo",6500],
        sal5=266.66;

function tabla(){
    let $contendTable= `
    <section>
        <a href="#modal-activo" class="animate__animated animate__rubberBand">Ver Personal Activo</a>
        <a href="#modal-PENDIENTE" class="animate__animated animate__rubberBand">Ver Bajas del mes</a>

        <div id="modal-activo" class="modal animate__animated animate__flip">
            <aside class="modal-box-activo">
                <form class="select" action="#" name="miForm" onsubmit="return validarFormulario()">
                    Seleccionar
                    <br>
                    <br>
                    <input type="checkbox" id="checkbox" name="empleado1" value="1">
                    <input type="checkbox" id="checkbox" name="empleado2" value="2">
                    <input type="checkbox" id="checkbox" name="empleado3" value="3">
                    <input type="checkbox" id="checkbox" name="empleado4" value="4">
                    <input type="checkbox" id="checkbox" name="empleado5" value="5">
                    <input type="submit" value="Enviar">
                </form>
                <table class="tab">
                <tbody>
                    <tr>
                        <th colspan="3">Octubre</th>
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
                        <td>${work2[0]}</td>
                        <td>${work2[1]}</td>
                        <td>${work2[2]}</td>
                    </tr>
                    <tr>
                        <td>${work3[0]}</td>
                        <td>${work3[1]}</td>
                        <td>${work3[2]}</td>
                    </tr>
                    <tr>
                        <td>${work4[0]}</td>
                        <td>${work4[1]}</td>
                        <td>${work4[2]}</td>
                    </tr>
                    <tr>
                        <td>${work5[0]}</td>
                        <td>${work5[1]}</td>
                        <td>${work5[2]}</td>
                    </tr>
                <tbody>
                </table>
                </aside>			
                <a href="#" class="close">cerrar</a>
                </div>
        </section>`;
$listaTrabajadores.insertAdjacentHTML("beforebegin",$contendTable);
};

$listaTrabajadores.addEventListener("click",tabla);

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

    if(elemento1== true){
        document.getElementById("nombreEmp").innerHTML= `${work1[0]}`;
        document.getElementById("puesto").innerHTML= `${work1[1]}`;
        document.getElementById("salario-neto").innerHTML= `${work1[2]}`;
        document.getElementById("salario-diario").innerHTML= `${sal1}`;
        return false;
    }else{
    }
    if(elemento2==true){
        document.getElementById("nombreEmp2").innerHTML= `${work2[0]}`;
        document.getElementById("puesto2").innerHTML= `${work2[1]}`;
        document.getElementById("salario-neto2").innerHTML= `${work2[2]}`;
        document.getElementById("salario-diario").innerHTML= `${sal12}`;
        return false;
    }else{
    }
    if(elemento3==true){
        document.getElementById("nombreEmp3").innerHTML= `${work3[0]}`;
        document.getElementById("puesto3").innerHTML= `${work3[1]}`;
        document.getElementById("salario-neto3").innerHTML= `${work3[2]}`;
        document.getElementById("salario-diario").innerHTML= `${sal3}`;
        return false;
    }else{
    }
    if(elemento4==true){
        document.getElementById("nombreEmp4").innerHTML= `${work4[0]}`;
        document.getElementById("puesto4").innerHTML= `${work4[1]}`;
        document.getElementById("salario-neto4").innerHTML= `${work4[2]}`;
        document.getElementById("salario-diario").innerHTML= `${sal4}`;
        return false;
    }else{
    }
    if(elemento5==true){
        document.getElementById("nombreEmp5").innerHTML= `${work5[0]}`;
        document.getElementById("puesto5").innerHTML= `${work5[1]}`;
        document.getElementById("salario-neto5").innerHTML= `${work5[2]}`;
        document.getElementById("salario-diario").innerHTML= `${sal5}`;
        return false;
    }else{
    }
    }

    //suma de nomina
    document.addEventListener("keyup", function () {
        let num2= Number(document.getElementById('asistencias').value),
            num3= Number(document.getElementById('compensacionD').value),
            num4= Number(document.getElementById('compensacion').value),
            num5= Number(document.getElementById('prima').value),
            num6= Number(document.getElementById('retardos').value),
            num7= Number(document.getElementById('sanciones').value);

        document.getElementById("total").innerHTML= Math.round(`${work1[2]}`/30*(num2+num3)+num4+(`${sal1}`*num5*0.25));
        document.getElementById("total-pagar").innerHTML= Math.round(`${work1[2]}`/30*(num2+num3)+num4+(`${sal1}`*num5*0.255)-num6-num7);
    })

    document.addEventListener("keyup", function () {
        let num2= Number(document.getElementById('asistencias2').value),
            num3= Number(document.getElementById('compensacionD2').value),
            num4= Number(document.getElementById('compensacion2').value),
            num5= Number(document.getElementById('prima2').value),
            num6= Number(document.getElementById('retardos2').value),
            num7= Number(document.getElementById('sanciones2').value);

        document.getElementById("total2").innerHTML= Math.round(`${work2[2]}`/30*(num2+num3)+num4+(`${sal2}`*num5*0.25));
        document.getElementById("total-pagar2").innerHTML= Math.round(`${work2[2]}`/30*(num2+num3)+num4+(`${sal2}`*num5*0.25)-num6-num7);

    })

    document.addEventListener("keyup", function () {
        let num2= Number(document.getElementById('asistencias3').value),
            num3= Number(document.getElementById('compensacionD3').value),
            num4= Number(document.getElementById('compensacion3').value),
            num5= Number(document.getElementById('prima3').value),
            num6= Number(document.getElementById('retardos3').value),
            num7= Number(document.getElementById('sanciones3').value);

        document.getElementById("total3").innerHTML= Math.round(`${work3[2]}`/30*(num2+num3)+num4+(`${sal3}`*num5*0.25));
        document.getElementById("total-pagar3").innerHTML= Math.round(`${work3[2]}`/30*(num2+num3)+num4+(`${sal3}`*num5*0.25)-num6-num7);

    })

    document.addEventListener("keyup", function () {
        let num2= Number(document.getElementById('asistencias4').value),
            num3= Number(document.getElementById('compensacionD4').value),
            num4= Number(document.getElementById('compensacion4').value),
            num5= Number(document.getElementById('prima4').value),
            num6= Number(document.getElementById('retardos4').value),
            num7= Number(document.getElementById('sanciones4').value);

        document.getElementById("total4").innerHTML= Math.round(`${work4[2]}`/30*(num2+num3)+num4+(`${sal4}`*num5*0.25));
        document.getElementById("total-pagar4").innerHTML= Math.round(`${work4[2]}`/30*(num2+num3)+num4+(`${sal4}`*num5*0.25)-num6-num7);

    })

    document.addEventListener("keyup", function () {
        let num2= Number(document.getElementById('asistencias5').value),
            num3= Number(document.getElementById('compensacionD5').value),
            num4= Number(document.getElementById('compensacion5').value),
            num5= Number(document.getElementById('prima5').value),
            num6= Number(document.getElementById('retardos5').value),
            num7= Number(document.getElementById('sanciones5').value);

        document.getElementById("total5").innerHTML= Math.round(`${work5[2]}`/30*(num2+num3)+num4+(`${sal5}`*num5*0.25));
        document.getElementById("total-pagar5").innerHTML= Math.round(`${work5[2]}`/30*(num2+num3)+num4+(`${sal5}`*num5*0.25)-num6-num7);

    })










































