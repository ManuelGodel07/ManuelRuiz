/*
console.log("hola, hagamos un simbolo ya que estos nos sirven como identificadores unicos", Symbol())
let id = Symbol();
    id2 = "hello"
console.log(id===id2)

const NOMBRE = Symbol();
const persona = {
    [NOMBRE]:"Manuel"
}

console.log(persona);
persona.NOMBRE = "luis"
console.log(persona[NOMBRE]);
* */

/**
FOR EACH

const numeros = [2,3,4,5]

    numeros.forEach(function(a, i,X){

        X[i] = Math.pow(a,3)
    });

    console.log(numeros)

if(16*2===342){
    console.log("es correcta la operación")
}else{
    console.log("La resppuesta es incorrecta")
}



WHILE

i=1
while(true){

    console.log(i++);
    if (i>3){
    break;
    }
}
 */

// FOR!! for(inicializacion;condicion;incremento){}

/**
var arreglo = ["Hola","Manuel", [1,2,],100,true,"aguacate",10]
for(var i= 0; i<= arreglo.length; i++){ 
    if(i>=5){
        break
    }
    console.log(arreglo[i])
}
*/



/**

//areglos
var arreglo = ["Hola","Manuel", [1,2,],100,true,"aguacate",10]
console.log([3])
console.log(arreglo.length)

// TRADICIONAL for(var i=0; i < arreglo.length; i++){
//    console.log(arreglo[i])}
var i = arreglo.length
for(; i>0; i--){
    console.log(arreglo[i])
}

 */


/** FUNCIONES 
function calculadora(a,b){
    return a+b
}
console.log("Soy el numero:",calculadora(100,-99 ))

*/

/**ARREGLOS

var arreglo = [2, 1, 10, 43,0 ,12];
arreglo.sort();
console.log(arreglo);


function ordenar(a,b){
    return a-b
}
var arreglo = [2, 1, 10, 43,0 ,12];
arreglo.sort(ordenar)
console.log(arreglo)

arreglo.reverse();
console.log(arreglo)

var arreglo2 = ("a,b,c,d").split(","); 
console.log("Vuelvete un arreglo", arreglo2)
arregl2 =arreglo2.join(",")
console.log("Vuelve a la normalidad:", arreglo2)
 */

/**OBJETOS DECLARADOS DENTRO DE VARIABLES
function tutor(nombre, apellido){
    this.nombre = nombre;
    this.saludar = function(){
        console.log("hola a todos yo soy: " + this.nombre);
    }
    if(typeof apellido !== undefined){
        this.nombreCompleto = nombre + " "+ apellido;
    }
}
var yo = new tutor("manuel","ruiz");

console.log(tutor.nombreCompleto);

var hermano = new tutor("victor","ruiz");
hermano.saludar();
 */
/*

var curso = {
    titulo: "Curso de JS",
    videos: 19,
    tutor: "Manuel",

    getTutor: function(){
        return this.tutor;
    },
    setTutor: function(tutor){
        this.tutor=tutor;
    }
};

curso.setTutor("Luis");
console.log(curso.getTutor())
*/
/**SET, es como un arreglo que admite valores unicos

const set = new Set([1,2,true,3,3,4,5,true,false,{},"hola","HOLA"]);

console.log(set)
console.log(set.size)

const set2 = new Set()
set2.add(1)
set2.add(1)
set2.add(true)
set2.add(false)
set2.add("manuel")
set2.add({})
set2.add(2)
set2.add(3)
set2.add(4)
console.log(set2);
console.log(set2.size)

for(item of set2){
    console.log(item)
}

set2.forEach(item => {
    console.log(item)
});

let arr =Array.from(set2)
console.log(arr[3]);
console.log(set2)
set2.delete(1)
console.log(set2)
console.log(set2.has("manuel"))
set2.clear();
console.log(set2)

 */

/**
let mapa= new Map();
mapa.set("nombre", "manuel")
mapa.set("apellido", "Ruiz")
mapa.set("Edad", 26)
console.log(mapa.size)
console.log(mapa.has("correo"))
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre"))
console.log(mapa.set("nombre","luis"))
console.log(mapa)
mapa.delete("apellido")
console.log(mapa)


for(let [key,value] of mapa){
    console.log(`Llave ${key}, valor ${value}`)
}
 */



/*weaksets and weakmaps

const ws = new WeakSet();
let valor1 = {"valor1":1}
let valor2 = {"valor2":2}
let valor3 = {"valor3":3}
ws.add(valor1);
ws.add(valor2);

console.log(ws);
console.log(ws.has(valor1));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);



const wm= new WeakMap();
let llave1 ={};
let llave2 ={};
let llave3 ={};

    wm.set(llave1,1)
    wm.set(llave2,2)
    console.log(wm);
    console.log(wm.get(llave1));
    wm.delete(llave2)
    console.log(wm);
    wm.set(llave2,2)
    wm.set(llave3,3)
    console.log(wm);
*/

/*Iterador es una interfaz que recorre la estructura de datos- Mecanismo para iterar (recorrer datos)

//const iterable= [1,2,3,4,5];
//const iterable = new Set([1,2,3,3,3,4,5,6,6])
//const iterable = "hola mundo"
const iterable = new Map([["nombre","Manuel"],["Edad",35]])

const iterador= iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);


let next = iterador.next();
while(!next.done){
    console.log(next.value);     
    next = iterador.next();
}

*/



/**GENERADRES SIRVEN PARA ITERAR FUNCIONES
function* iterable(){

    yield "hola"
    console.log("hola consola");
    yield "hola2"
    console.log("seguimos con mas instrucciónes")
    yield "hola3"
    yield "hola4"
}
let iterador = iterable();

for (let y of iterador){
    console.log(y);
}

const arr = [...iterable()];
console.log(arr)

function cuadrado(valor){
    return setTimeout(()=> {
        console.log ({valor,resultado:valor*valor})
},Math.random()*1000)
}


function* generador(){
    console.log("inicia generator")
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina generator")
}

let gen =generador();
for(let y of gen){
    console.log(y)
}

*/


/**PROXYS CONSTRUYE OBJETOS A PARTIR DE OTRO OBJETO, COMO SI GENERARA UN HIJO DEL OBJETO 
 */

/**
const persona = {
    nombre:"",
    edad:1,
    apellido:""
}
console.log(persona)
const manejador = {
//para validaciónes
    set(objeto,propiedades,valor){
        objeto[propiedades]=valor;
        if(Object.keys(objeto).indexOf(propiedades)===-1){
        return console.log(`La propiedad ${propiedades} no existe`)
    }
    objeto[propiedades]=valor;
    }
}

const user1 = new Proxy(persona,manejador)
user1.nombre = "Manuel";
user1.apellido= "Ruiz";
user1.edad= 34;
user1.facebook= "@Manuel_007"
console.log(user1)

 */

/**PROPIEDADES DINAMICAS

let aleatorio = Math.round(Math.random()*100+5);
const objUsuarios= {
    propiedad: "valor",
    [`id_${aleatorio}`]:  "valorAleatorio"
}
console.log(objUsuarios)
const usuarios = ["john","irma","Miguel","Kala","Manuel"]
usuarios.forEach((usuario,index) =>objUsuarios[`id_${index}`]=usuario);
console.log(objUsuarios)

*/
/**THIS 

console.log(this)


this.nombre = "Contexto Global"
function imprimir(){
    console.log(this.nombre)
}
imprimir()


const obj ={
    nombre: "contexto",
    imprimir:function(){
        console.log(this.nombre)
    }
}
obj.imprimir(); 


const obj2 ={
    nombre: "contexto2",
    imprimir: imprimir
}
obj2.imprimir();

const obj3 ={
    nombre: "funcion flecha mantiene un enlace del contexto donde fue creado (es decir el global)",
    imprimir:() => {
        console.log(this.nombre)
    }
}
obj3.imprimir();
 * */

/** THIS. APPLY CALL BIND


console.log("hola")
this.lugar = "contexto global";

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}
saludar("hello", "juan");

const obj ={
    lugar: "contexto objeto",
}
saludar.call(obj,"hola","manuel");
saludar.apply(obj,["adios","manolo"]);



const persona={
    nombre: "manuelito",

    
    saludar:function(){
        console.log(`hola ${this.nombre}`)
    }
}
persona.saludar()


const persona2={
    nombre: "luis",
    saludar:persona.saludar,
    saludar2:persona.saludar.bind(persona)
}
persona2.saludar();
persona2.saludar2();
*/

/**
const json = {
    cadena:"manuel",
    numero:35,
    booleano:true,
    arreglo: [1,2,3,4],
    objeto:{
        twitter: "manuel ruiz",
        email: "manuel_ruiz@ciencias.unam.mx",
    },
    nulo:null
}
console.log(json)
 */

 /***
console.log(window)
console.log(document)

let texto ="Bienvenido a la pagina"
const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto));

hablar(texto)


DOM
 */

 /**
console.log(document.head)
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))


console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)

document.querySelectorAll("a").forEach((el) => console.log(el));
 */
/**
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang ="es-MX"

const $linkDom = document.querySelector(".link-dom");
$linkDom.setAttribute("target","_blank");
$linkDom.setAttribute("rel","noopener")
$linkDom.setAttribute("href","https://www.youtube.com/watch?v=p0VxCIP_EzU")
console.log($linkDom.hasAttribute("rel"))


console.log($linkDom.getAttribute("data-description"))
console.log($linkDom.dataset)
console.log($linkDom.dataset.description)
$linkDom.setAttribute("data-description","Modelo de objeto del documento")
console.log($linkDom.dataset.description)
$linkDom.dataset.description="hola esto es inestperado";
console.log($linkDom.dataset.description)
console.log($linkDom.getElementsByClassName.backgoundColor);
console.log($linkDom.style.color);
console.log(getComputedStyle($linkDom).getPropertyValue("color"));
$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.setProperty("display", "block");
$linkDom.style.width ="50%";
$linkDom.style.textAlign= "center"
 */
//custom propertires css
/**
const $html = document.documentElement,
    $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor, varYellowColor)
$body.style.backgroundColor= varDarkColor;
$body.style.color = varYellowColor;
$html.style.setProperty("--dark-color","black");
* */



/**
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("teletransprtación"),
    $cards = document.querySelector(".cards");
    $figure2 = document.createElement("figure")

    
$img.setAttribute("src", "https://static1.abc.es/media/ciencia/2016/01/27/Teleportation--620x349.jpg")
$img.setAttribute("alt", "teletransportación")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img) 
$figure.appendChild($figcaption)
$cards.appendChild($figure);

$figure2.innerHTML=`
    <img src="https://www.tekcrispy.com/wp-content/uploads/2018/10/Teletrasportacin-2-640x360.jpg" alt="People">
    <figcaption>Fisica Cuantica</figcaption>
`
;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera","Otoño","Verano","Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciónes del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent= el;
    $ul.appendChild($li);

})

const continentes = ["Africa", "Europa","Asia","America", "Oceania"]
    $ul2 = document.createElement("ul");
    
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul.innerHTML += `<li>${el}</li>`));
 */












































