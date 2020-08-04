/**
function cuadradoPromise(value){
    if(typeof value !== "number"){
        return Promise.reject(`Error, el valor "${value}
        " ingresado no es un numero`);
    }
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        resolve({
            value,
            result: value*value
        });
        },0|Math.random()*1000)
    })
}


cuadradoPromise(9)
    .then((obj)=>{
        console.log(obj)
    })
    .catch(err=> console.error(err))
 */

/***FUNCION ASINCRONA DECLARADA
async function funcionAsincronaDeclarada(){
    try{
        console.log("Inicio")
        let obj = await cuadradoPromise(4)
        console.log(`Async function: ${obj.value}, ${obj.result}`)
        obj = await cuadradoPromise(9)
        console.log(`Async function: ${obj.value}, ${obj.result}`)

    }catch(err){

    }
}

funcionAsincronaDeclarada()


*/



/***

function*iterable(){
    yield"hola";
    console.log("hola mundo");
    yield"hola2";
    console.log("hola mundo2 ");
    yield"hola3";
    yield"hola4";
}


let iterador = iterable()
for(let y of iterador){
    console.log(y)
}
const arr = [...iterable()]
console.log(arr)

function cuadrado(valor){
    setTimeout(()=> {
        console.log({valor, resultado: valor*valor})
    },Math.random()*2000)
    return{
        valor, 
        resultado: valor*valor
    }
}


function*generador(){
    console.log("inicia generador")
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log("Termina generador")
}

let gen = generador();

for(y of gen){
console.log(y)
}

 */
/***PROXIS= es un mecanismo para crear un objeto basado en un objeto literal inicial
const persona ={
    nombre:"",
    apellido:"",
    edad:1
}
const manejador={
    set(obj,propiedades,valorDePropiedades){
        if(Object.keys(obj).indexOf(propiedades)===-1){
            return console.error(`La propiedad ${propiedades} no existe en el objeto persona`);
            
        }
        if(
            (propiedades==="nombre" || propiedades==="apellido") &&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valorDePropiedades))
        ){
            return console.error(`La propiedad "${propiedades}"" solo acepta letras y espacios en blanco`);
        }
        obj[propiedades]=valorDePropiedades
    }
}
const alumno31= new Proxy(persona,manejador)
alumno31.nombre="Ivan";
alumno31.apellido="Franchini";
alumno31.edad=56;
alumno31.id="Ifr31"

const alumno30= new Proxy(persona,manejador)
alumno30.nombre="Manuel";
alumno30.apellido="Ruiz";
alumno30.edad=26;
alumno30.id="Mru30"


console.log(alumno30)
console.log(persona)
 */
/***CALL APPLY BEHIND 
this.lugar = "contexto global";
function saludar(saludo, receptor){
    console.log(`${saludo} ${receptor} desde el ${this.lugar}`)
}

saludar("buenas tardes","jorge")
const obj = {
    lugar: "contexto objeto"
}

saludar.call(obj,"hola","manuel")
saludar.apply(obj,["hola","luis"])

*/













