function puesto(){
    let ocupacion = (document.getElementById("puesto").value);
    document.getElementById("puesto").innerHTML=200;
}
puesto();

function resultado() {
    let diasT= parseInt(document.getElementById("dias").value);
    let suldoD= parseFloat(document.getElementById("sueldo_diario").value);
    document.getElementById("sueldoB").innerHTML= "El total a pagar es: " + (diasT*suldoD);
}


function sumar() {
    let diasT= parseInt(document.getElementById("dias").value);
    let suldoD= parseFloat(document.getElementById("sueldo_diario").value);
    alert(diasT+suldoD)
    
}
function limpiar() {
    document.getElementById('calc').onreset();
}