let name= "Manuelito";
let LastName = "Ruiz";

let mael = {
    nombe: "Manuel",
    age: 26
}
//alert(Greeting);
console.log(`Este es un objeto universal llamado ${mael}`);

let sao ="Hola, mi nombre es: ";

// CON + SE CONCATENA --ES UN EJEMPLO-->console.log(saludo + name + LastName)
let saludo2 = `${sao} ${name} ${LastName}, linea final`
console.log(saludo2)
/*
let a = 5;
let b = 5.321;
let c = "4.32";

console.log(b.toFixed(2));
console.log(parseInt(c))
console.log(typeof(a));

function good(){
    console.log("uno");
    console.log("dos");
    console.log("Fin");
}
good();
function funcionQueDevuelveValor(){
    return "Esto es lo que retorna";
}
//let valorDeFuncion = funcionQueDevuelveValor();
//console.log(valorDeFuncion);
function saludar(nombre,edad){
    console.log(`hola mi nombre es ${nombre } y tengo ${edad} años.`)
}
saludar("valeria", 25)

function saludoarExtraño(nombre2= "Amigo", edad2=45){
    console.log(`Hola ${nombre2} ¿tienes ${edad2} años?`)
}
saludoarExtraño()

const funcionExpresada = function(){
    console.log("esto es una funcion expresada, es decir una funcion a la que se asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dira")
}
funcionExpresada();
*/
/*
const a = [];
const b = [1, true, "hola solo esto se imprime selecciónandolo",["A","B","C"],1.3]
console.log(b, b.length, b[3]);
const c = Array(50).fill("wow");
console.log(c);
*/

/*
const manuelObj ={
    nombre: "Manuel",
    apellido: "Ruiz",
    edad: 26,
    pasatiempos: ["Correr","jugar","leer"],
    soltero: false,
    contacto: {
        email: "manuel_ruiz@ciencias.unam.mx",
        facebook: "@manuel_ruiz",
        tel: 5540145714,
        saludo2
    },
    sal:function(){
        console.log("Este es un metodo del objeto manuelObj");
    },
    decirMiNombre:function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}
 
console.log(manuelObj);
    console.log(manuelObj["soltero"]);
    manuelObj.sal();
manuelObj.decirMiNombre();
console.log(Object.keys(manuelObj))
console.log(Object.values(manuelObj))
console.log(manuelObj.hasOwnProperty("nombre"));
*/


/*
let edad = 18;
if(edad <= 8){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

let hour = 24;
if(hour>=6 && hour<12){
    console.log("Buenos dias")
}else if(hour>=12 && hour<19){
    console.log("Buenas tardes")
}else if(hour>=19 && hour<23){
    console.log("Buenas noches")
}else if(hour>=23 || hour<6){
    console.log("Dejame dormir")
}
let m = "hombre";
let sex = (m === "waka waka") 
    ? "Eres hombre" 
    :"Eres mujer";
    console.log(sex)

let day =2;
switch (day) {
    case 1:
        console.log("Domingo");        
        break;
    case 2:
        console.log("Lunes");        
        break;
    case 3:
        console.log("Martes");        
         break;
    case 4:
        console.log("Miercoles");        
        break;
    case 5:
        console.log("Jueves");        
        break;
    case 6:
        console.log("Viernes");     
        break;
    case 7:
        console.log("Sabado");    
        break;
    default:
        console.log("Error imprevisto")
        break;
}


*/

/*
let contador = 0;
while(contador<10) {
    console.log("num. "+contador)
    contador++
}
do {
    console.log("N_"+contador)
    contador++    
} while (contador<10);

for (let i = 0; i <10; i++) {
    console.log("for: " + i)
}
let number =[10,20,30,40,50,60,70,80,90];
for (let i=0; i < number.length; i++) {
    console.log(number[i])
}
const manu={
    nombre: "Manuel",
    apellido: "Ruiz",
    edad:26
}
For in para devolver propiedades de un objeto

for (const prop in manu) {
    console.log(`Key:${prop}, Value${manu[prop]}`)
}
for of para devolver cualquier propiedad de un objeto

for (const elemento of number) {
    console.log(elemento);
}
*/
/* 

try {
    console.log("en el try se agrega el codigo a evaluar")
} catch (error) {
    console.log("catch captura cuaquier error que haya surgido o lanzado en el try")
}finally{
    console.log("finally se enecutrara al final de un bloque try-catch")
}
*/
/* 
const number = [1,2,3,4,5,6,7,8,9,10,"a","b"];
for(let i=0; i< number.length; i++){
    if(i===2){
        continue;
    }
    if(i===5){
        break;
    }
    console.log(number[i])
}
*/
/* 
const numeros=[1,2,3]
const[one,two,three]=numeros;
console.log(one,two,three)

let persona={
    nombre: "manuel",
    apellido: "ruiz",
    edad: 26    
}
let{nombre,apellido,edad} =persona;
console.log(nombre,apellido,edad);
*/

/* 
let nombre= "tenshi",
    edad= 7;

const perro = {
    nombre,    
    edad,
    raza: "callejero",
    ladrar:function(){
        console.log("Ruido")

    }
}
console.log(perro);
perro.ladrar()

const perro2={
    ladrar(){
        console.log("ruido2")
    }
}

console.log(perro2)
perro2.ladrar()
*/
/* 
function sumar(a,b,...c){
    let resultado = a+b;
    c.forEach(function(n){
        resultado +=n
    })
    return resultado;
}
console.log(sumar(1,2,3,4,5))
const arr1 =[1,2,3,4,5],
    arr2 = [6,7,8,9,10];
console.log(arr1,arr2)
const arr3 = [...arr1, ...arr2]
    console.log(arr3)
*/


/* 
const saluo = (idetidad, añito) => {
    console.log(`Hola ${idetidad} tienes ${añito} años`);
}
saluo(`manolete`,26)

const numi =[1,2,3,4,5];
numi.forEach(function(el,index){
    console.log(`El numero ${el} esta en la posición ${index}`)
    })

const perrito = {
    nombre3:"tenshi",
    edad:2,
    ladrar:()=>{
        console.log(this)
    }
}
perrito.ladrar();

*/
/* 
const pajaro ={
    nombe:"wendy",
    ladrar(){
        console.log("Guau Gua")
    }
}
const pajaro2={
    nombe:"Lolabony",
    ladrar(){
        console.log("Guau Gua")
    }
}

console.log(pajaro);
console.log(pajaro2);
*/

//funcion constructora donde asignamos los metodos al prototipo no a la funcion
/** 
function Animal(nombre,genero){
    this.nombre= nombre;
    this.genero=genero;
}


Animal.prototype.sonar = function(){
    console.log("Guau Gua"); 
}
Animal.prototype.presentar =function(){
    console.log(`Hola me llamo ${this.nombre}`)
}



const snoopy = new Animal("snoppy", "macho"),
    lolabunny =new Animal("lola", "hembra")

    console.log(snoopy);
    console.log(lolabunny);
lolabunny.presentar();

*/
/**
function Humano(name1,act1){
    this.name1= name1;
    this.act1=act1;
}

Humano.prototype.multiplicar= function(){
    const a = 5,
        b = 2
    console.log(a*b)
}
Humano.prototype.hablar= function(){
    console.log("Hola soy un humano")
}

const angel = new Humano("Angel",34)

//herencia prototipica
function Mexicano(name1,act1,tamano){
    this.super= Humano;
    this.super(name1,act1);
    this.tamano=tamano;
}
Mexicano.prototype = new Humano();
Mexicano.prototype.constructor = Mexicano;

//sobreescritura de metodo dle prototipo padre al hijo

Mexicano.prototype.hablar = function(){
    console.log("Soy un humano feliz");
}
Mexicano.prototype.multiplicar=function(){
    console.log(26)
}
console.log(angel)
const telma = new Mexicano("helena","mujer", "chiquita" )
*/
/** 
class Animal{
    constructor(nombre,genero,tamanio){
        //el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
        this.nombre=nombre;
        this.genero=genero;

    }
    //metodos
    sonar(){
    console.log("hago sonidos porque estoy vivo");
    }
    saludar(){
    console.log(`Hola me llamo ${this.nombre} y mi sexo es ${this.genero}`);
     }
// el metodo statico sirve para crear un metodo y que este pueda ser llamado sin la necesidad de instanciarlo (es decir meterlo en un objeto)
     static queEres(){
         console.log("soy un metodo estatico")
     }
}


class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio=tamanio;
    }
    sonar(){
        console.log("soy un perro y mi sonido es un ladrido")
    }
    ladrar(){
        console.log("ladrar")
    }
}

const mimi = new Animal("mimi","hembra"),
    scobby = new Animal("Scobby Doo", "Macho")
    buo = new Animal();
console.log(mimi)
mimi.saludar()
scobby.sonar()
console.log(scobby)
Perro.queEres()
*/


/*
console.log(console);
console.error("este es un error")
console.warn("esto es un aviso")
console.info("esto es un mensaje informativo de manuel ruiz")

let nombre = "manuel",
    apellido ="ruiz",
    edad= 25

console.log(nombre,apellido,edad)

console.log()
console.log(document)
console.dir(document)
console.clear()
console.time("final")
const arreglo = Array(10000000);
    for (let i=0; i<arreglo.length; i++){
        arreglo[i]=i;
    }
 console.timeEnd("final")
// console.log(arreglo)
console.clear();
for( let i=0; i<=12; i++){
    console.log(i);
    console.count("codigo for")
}


let x= 5,
    y=2,
    pruebaXy="se espera que x sea menor que y";

console.assert(x<y,{x,y,pruebaXy});
console.clear();
//console.log(Date())

const fecha = new Date()
    console.log(fecha)
    console.log(fecha.getDate())
    console.log(fecha.getDay())
    console.log(fecha.getFullYear())
    console.clear()

let cadena = "lorem ipsum 2 dolor sit amet consectetur adipisicing elit. Eveniet expedita dolore hic odit dolor qui nulla sit, corporis soluta fugit officiis esse praesentium, porro ratione voluptatibus exercitationem recusandae aliquam2 rerum "

//let expReg = new RegExp("lorem","ig");
let expReg2 = /lorem{1}/ig;
    
console.log(expReg2.test(cadena))
console.log(expReg2.exec(cadena))



* */    
//funciones anonimas autoejecutables

!function(a,b,c){
    console.log(b);
}(document,window,console);


console.clear()



















































