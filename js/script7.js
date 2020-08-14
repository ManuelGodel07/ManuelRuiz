
/*let name = prompt('Bienvenido, ¿quien eres?')
alert(name +' eres bienvenido')
let age = prompt('Ingresa tu edad')
let comparation = parseInt(age,10) >= 18
					? 'Eres adulto'
					: 'Eres menor'
alert(comparation) 

let	city	=prompt('¿cual es la capital de méxico?').toLowerCase().trim()
	let message = city === 'cdmx'
				? 'es correcto'
				: 'es incorrecto'
alert(message)

let password = 'manuel'
let pass

do{
	pass = prompt('Ingresa la contraseña').toLowerCase().trim()
//	let number = parseInt(prompt('Dame un numero'),10)
} while(pass !== password)


saludar = prompt('Dame tu nombre')
//saludar = prompt('Dame tu apellido')
function saludar(persona){
	return `Hola ${persona}`
}
alert(`${saludar} eres bienvenido`)


a = 5
b = 15
const sumar = (a,b) => a + b

	result = sumar
alert(result)
*/

/*

const humano={
	nombre: "Manuel",
	apellido:"Ruiz",
	edad:26,
	pasatienpos: ["leer", "programar","ver series"],
	contacto: {
		correo: "manuel_ruiz@ciencias.unam.mx",
		tel: 554014714,
	},
	largo:function(){
		console.log("Hola soy un objeto llamado manuel, comencemos!!");		
	}
}

const contar =function(){
	cadena = humano.nombre;
	const large = cadena.length;
	console.log(`Mi nombre tiene ${large} caracteres`);
}
humano.largo();
contar();
const hola = "numeros0123456789"
	console.log(hola.substring(0,6))

const fila = function(){
	dias= "Mis dias favoritos son los lunes, sabados y domingos";
	imprimir = dias.split(" ",)	
	console.log(imprimir)
}
fila();

let text1="hola mundo "
for(let o=1; o <=3; o++){
	console.log(text1,o)
}
console.log(text1.repeat(3))
console.clear();

//clase 2

const text2= "hola manolo";
if(text2===""){
	console.log("No escribiste nada")
}else if (text2===text2){
	const modif = ("No escribiste nada").split("",)
	console.log(modif.join(""))
	console.log(modif.reverse().join(""))
}
console.log("soy chido")

for (let i = 0; i<2; i++) {
	let text3 ="Texto dentro del área de texto de aqui merito para poder contar en el texto las palabras de texto repetidas";
	let arreglo1 = text3.split(" ");
	console.log(arreglo1)	
}
 
let text4 ="asdedsa";
let ptexto4 = text4.split("",).reverse().join("");
	const palindromo =(text4 === ptexto4)
	? "es un palindromo"
	: "no es palindromo"
console.log(palindromo)

const validadorDeRepeticion = (cadena1 = "You look for me Inside the dark I am the ocean You are the shark You hunt me like Your last goodbye Oh fallen angel Of the night Just take my heart Just rip it out This holy skin It's falling out I lay my body On the bedOne day, someday You know I will see you again  I put my hand against your plastic heart No, suicide is not the plan, stand up Even the stars are trapped inside, oh my There's nothing left to hide There's nothing left to die There's nothing left to die I put my hand against your plastic heart No, suicide is not the plan, stand up Even the stars are trapped inside, oh my There's", texto5="plastic")=>{
	if(!cadena1) return console.warn("no ingresaste el texto largo");
	if(!texto5) return console.warn("No ingresaste la palabra a evaluar");
	let i=0,
		contador=0;
	while(i!==-1){
		i=cadena1.indexOf(texto5,i);
		if(i!==-1){
		i++;
		contador++;
		}
	}
	return console.info(`La palabra ${texto5} se repite ${contador} veces`)
}
validadorDeRepeticion();

const eliminarPat = (texto6= "", patron="") =>
	(!texto6)
	? console.log("no ingresaste datos")
	:(!patron)
		?console.log("¿que patron quito?")
		:console.log(texto6.replace(new RegExp(patron, "ig"),""));
		eliminarPat("hola soy manuel ruiz, me gusta comer carnes rojas y tomar refresco, casi no me gusta el alcohol", "a");


console.clear();

const a = function getRandom(min,max){
	return Math.floor(Math.random()*(max-min)) + min;
}
console.log(a(501,600));


function entero(x,y){
	if (Number.isInteger(x/y)){
	return "Es entero";
	}
	return"Es primo";
}
console.log(entero(49,2))

function descuento (x,y){
	if(x>5000){
	const a = x*y;
	return `tiene un descuento, total a pagar: $${a}`
	}
	return "no tiene descuento";
}
console.log(descuento(10000,.85))

var cumplaños = new Date(2021,1,11);
	console.log(cumplaños, "inicio")
var ahora = new Date(2020,5,31);
	console.log(ahora, "fin")
var transcurso = (ahora- cumplaños)/86400000 ;

console.log(`Hola faltan ${transcurso} dias para tu cumpleaños`)

console.clear();


const contarLetras =(cadena="") => {
	if (!cadena) return console.warn("No ingresaste texto");
	if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado no es una cadena de texto`);

	let vocales = 0,
		consonantes = 0;
	for (let letra of cadena){
		if (/[AEIOUaeiou]/.test(letra))vocales++;
		if (/[BCDFGHJKLMNPQRSTVWXYZbcdfghijklmnpqrstuvxyz]/.test(letra)) consonantes++;
		}

		return console.info({
		cadena,
		vocales,
		 consonantes			
	})	
}

contarLetras("nonos")
* */

/*

console.log("inicio")
setTimeout(() => {
	console.log("ejecutando codigo en 3 segundos")
}, 3000);


setInterval(() => {
	console.log("ejecutando codigo en 3 segundos")
}, 1000);
* */
console.clear();

/**
function cuadradoCallBack(value,callback){
	setTimeout(()=>{
		callback(value,value*value);
	},0|Math.random()*1000);
}

cuadradoCallBack(0, (value,result)=>{
	console.log("inicia CallBack")
	console.log(`callback: ${value}, ${result}`)
});
 */



/** 
function cuadradoPromise(value){
	if(typeof value !== "number"){
		return Promise.reject(`Error ${value} no es un numero`);
	}
		return new Promise((resolve, reject) =>{
		setTimeout(()=>{
			resolve({
				value,
				result:value*value
			});
		},0|Math.random()*1000);
	})
}
cuadradoPromise(20)
	.then((obj) => {
		console.log("Inicia Promesa");
		console.log(`Promesa ${obj.value}, ${obj.result}`)
		return cuadradoPromise(5)
	}) 
	.then(obj => {
		console.log(`Promesa ${obj.value}, ${obj.result}`)
		return cuadradoPromise(2)
	})
	.then(obj => {
		console.log(`Promesa ${obj.value}, ${obj.result}`)
		return cuadradoPromise(3)
	})
	.then(obj => {
		console.log(`Promesa ${obj.value}, ${obj.result}`)
		return cuadradoPromise(8)
	})
	.then(obj => {
		console.log(`Promesa ${obj.value}, ${obj.result}`)
		console.log("Fin de promesa")
	})
	.catch( err => console.error(err));
*/
/**
function cuadradoPromise(value){
	if(typeof value !== "number"){
		return Promise.reject(`Error ${value} no es un numero`);
	}
		return new Promise((resolve, reject) =>{
		setTimeout(()=>{
			resolve({
				value,
				result:value*value
			});
		},0|Math.random()*1000);
	})
}

async function funcionAsincronaDeclarada(){
	try {
		console.log("empieza el async function");

		let obj= await cuadradoPromise(0);
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise("f")
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise(2)
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise(5)
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise(10)
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		console.log("Fin")
	} catch (err) {
		console.log(err)
	}
}

funcionAsincronaDeclarada();



const funcionAsincronaExpresada = async() =>{
	try {
		console.log("empieza el async function");

		let obj= await cuadradoPromise(0);
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise(6)
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise(2)
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise(5)
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		obj = await cuadradoPromise(10)
		console.log(`Async Function: ${obj.value}, ${obj.result}`)
		console.log("Fin")
	} catch (err) {
		console.log(err)
	}
}

funcionAsincronaExpresada();
 */
export default function hamburgerMenu(panelBtn,panel, menuLink){
	const d= document;

	d.addEventListener("click", e =>{
		if(e.target.matches(panelBtn)||e.target.matches(`${paqnelBtn} *`)){
			d.querySelector(panel).classList.toggle("is-active")
			d.querySelector(panelBtn).classList.toggle("is-active")
		}
		if(e.target.matches(menuLink)){
			d.querySelector(panel).classList.remove("is-active")
			d.querySelector(panelBtn).classList.remove("is-active")

		}
	})
}














 
































































































